import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { addDevice } from '../actions';

let AddDevice = ({ dispatch }) => {
  const [idevice, setIdevice] = useState({
    name : '',
    description : '',
    disabled : false
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

  function submitDevice(e) {
    e.preventDefault();
    dispatch(addDevice(idevice.name, idevice.description, idevice.disabled));
    
    setIdevice({
      name : '',
      description : '',
      disabled : false
    });
  }

  return (
    <div className='jumbotron mt-5'>
      <form>
        <div className='form-group'>
          <label htmlFor='inputName'>Device name:</label>
          <input type='text' className='form-control' id='inputName' placeholder='Enter name' value={idevice.name} onChange={handleChange} name='name'></input>
        </div>
        <div className='form-group'>
          <label htmlFor='inputDescription'>Description:</label>
          <input type='text' className='form-control' id='inputDescription' placeholder='Enter a description' value={idevice.description} onChange={handleChange} name='description'></input>
        </div>
        <div className='form-check'>
          <input type='checkbox' className='form-check-input' id='inputDisabled' checked={idevice.disabled} onChange={handleChangeCheckBox} name='disabled'></input>
          <label className='form-check-label' htmlFor='inputDisabled'>Disabled</label>
        </div>
        <div className='mt-2'>
          <button type='submit' className='btn btn-primary' onClick={submitDevice}>Add Device</button>
        </div>
      </form> 
    </div>
  );
}
AddDevice = connect()(AddDevice);

export default AddDevice;