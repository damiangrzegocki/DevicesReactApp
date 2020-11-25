export const ADD_DEVICE = 'ADD_DEVICE';
export const DELETE_DEVICE = 'DELETE_DEVICE';
export const UPDATE_DEVICE = 'UPDATE_DEVICE';
export const LOAD_DEVICE_LIST = 'LOAD_DEVICE_LIST';
export const RENDER_DEVICE_LIST = 'RENDER_DEVICE_LIST';

export function addDevice(name, description, disabled) {
  return {
    type: ADD_DEVICE,
    deviceItem: {
      name,
      description,
      disabled
    }
  };
}

export function deleteDevice(deviceId) {
  return {
    type: DELETE_DEVICE,
    deviceItem: {
      deviceId
    }
  };
}

export function updateDevice(deviceId, name, description, disabled) {
  return {
    type: UPDATE_DEVICE,
    deviceItem: {
      deviceId,
      name,
      description,
      disabled
    }
  };
}

export function loadDeviceList() {
  return {
    type: LOAD_DEVICE_LIST
  };
}