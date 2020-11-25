import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateDevice } from '../actions';

let DeviceEditable = ({ dispatch, id, name, description, disabled, onSaveChange}) => {
  const [idevice, setIdevice] = useState({
    name : name,
    description : description,
    disabled : disabled
  })

  function handleChange(e) {
    const {name, value } = e.target;

    setIdevice((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  function handleChangeCheckBox(e) {
    const {name, checked } = e.target;

    setIdevice((prev) => {
      return {
        ...prev,
        [name]: checked
      }
    })
  }

  function saveDevice(e) {
    e.preventDefault();
    onSaveChange(false);
    dispatch(updateDevice(id, idevice.name, idevice.description, idevice.disabled));
  }

  return (
    <form className='mt-4'>
      <div className='form-row'>
        <div className='col-4'>
          <input type='text' className='form-control' id='inputName' placeholder='Edit name' value={idevice.name} onChange={handleChange} name='name'></input>
        </div>
        <div className='col-4'>
          <input type='text' className='form-control' id='inputDescription' placeholder='Edit description' value={idevice.description} onChange={handleChange} name='description'></input>
        </div>
        <div className='col-2'>
          <div className='form-row form-check ml-3'>
            <input type='checkbox' className='form-check-input' id='inputDisabled' checked={idevice.disabled} onChange={handleChangeCheckBox} name='disabled'></input>
            <label className="form-check-label" htmlFor="inputDisabled">Disabled</label>
          </div>
        </div>
        <div className='col-2'>
          <button type='submit' className='btn btn-primary' onClick={saveDevice}>Save</button>
        </div>
      </div>
    </form> 
  );
};

DeviceEditable.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  disabled: PropTypes.bool.isRequired
};

DeviceEditable = connect()(DeviceEditable);

export default DeviceEditable;