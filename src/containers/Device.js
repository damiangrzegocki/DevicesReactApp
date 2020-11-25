import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteDevice } from '../actions';
import DeviceEditable from './DeviceEditable'

let Device = ({ dispatch, id, name, description, disabled}) => {
  const [tEdit, setTedit] = useState(false);

  function handleDeleteOnClick() {
    dispatch(deleteDevice(id));
  }

  function handleEditOnClick() {
    setTedit(!tEdit);
  }

  const handleVisibility = (value) => {
    setTedit(false);
}

  return (
      <li className='list-group-item'>
        <div className='row'>
          <div className='col'>
            {name}
          </div>
          <div className='col'>
            {description}
          </div>
          <div className='col'>
            {disabled === true ? '✓' : '✗'}
          </div>
          <div className='col'>
            <button className='btn btn-danger' onClick={handleDeleteOnClick}>
              DELETE
            </button>
          </div>
          <div className='col'>
            <button className='btn btn-primary' onClick={handleEditOnClick}>
              EDIT
            </button>
          </div>
        </div>

        {tEdit === true ?
        <DeviceEditable id={id} name={name} description={description} disabled={disabled} onSaveChange={handleVisibility}/> :
        null}
    </li>
  );
};

Device.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  disabled: PropTypes.bool.isRequired
};

Device = connect()(Device);

export default Device;