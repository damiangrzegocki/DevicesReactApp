import { all, call, put, takeEvery } from 'redux-saga/effects';
import { LOAD_DEVICE_LIST } from '../actions';
import { RENDER_DEVICE_LIST } from '../actions';
import { ADD_DEVICE } from '../actions';
import { DELETE_DEVICE } from '../actions';
import { UPDATE_DEVICE } from '../actions';

export function* fetchDeviceList() {
  const url = 'https://localhost:44375/api/devices';
  const response = yield call(fetch, url);
  const data = yield response.json();

  yield put({ type: RENDER_DEVICE_LIST, deviceList: data });
}

export function* loadDeviceList() {
  yield takeEvery(LOAD_DEVICE_LIST, fetchDeviceList);
}

export function* postDevice(action) {
  const url = 'https://localhost:44375/api/devices';

  yield call(fetch, url, {
    method: 'POST',   
    headers: {
      'Content-Type': 'application/json'
    },
    body : JSON.stringify({
      name: action.deviceItem.name,
      description: action.deviceItem.description,
      disabled: action.deviceItem.disabled
    })
  });

  const response = yield call(fetch, url);
  const data = yield response.json();

  yield put({ type: RENDER_DEVICE_LIST, deviceList: data });
}

export function* addDevice() {
  yield takeEvery(ADD_DEVICE, postDevice);
}

export function* removeDevice(action) {
  const url = 'https://localhost:44375/api/devices';

  yield call(fetch, url + '/' + action.deviceItem.deviceId, {
    method: 'DELETE',   
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const response = yield call(fetch, url);
  const data = yield response.json();

  yield put({ type: RENDER_DEVICE_LIST, deviceList: data });
}

export function* deleteDevice() {
  yield takeEvery(DELETE_DEVICE, removeDevice);
}

export function* putDevice(action) {
  const url = 'https://localhost:44375/api/devices';

  yield call(fetch, url + '/' + action.deviceItem.deviceId, {
    method: 'PUT',   
    headers: {
      'Content-Type': 'application/json'
    },
    body : JSON.stringify({
      name: action.deviceItem.name,
      description: action.deviceItem.description,
      disabled: action.deviceItem.disabled
    })
  });

  const response = yield call(fetch, url);
  const data = yield response.json();

  yield put({ type: RENDER_DEVICE_LIST, deviceList: data });
}

export function* updateDevice() {
  yield takeEvery(UPDATE_DEVICE, putDevice);
}

export default function* rootSaga() {
  yield all([loadDeviceList(), addDevice(), deleteDevice(), updateDevice()]);
}