import { RENDER_DEVICE_LIST } from '../actions';

const initialState = {
  deviceList: []
};

export default function deviceApp(state = initialState, action) {
  switch (action.type) {
    case RENDER_DEVICE_LIST:
      return {
        ...state,
        deviceList: action.deviceList
      };
    default:
      return state;
  }
}