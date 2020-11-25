import React from 'react';
import PropTypes from 'prop-types';
import Device from '../containers/Device';

const DeviceList = ({ deviceList }) => (
  <div className='jumbotron'>
    <ul className='list-group'>
      <li className='list-group-item'>
        <div className='row'>
          <div className='col'>
            <strong>Name</strong>
          </div>
          <div className='col'>
            <strong>Description</strong>
          </div>
          <div className='col'>
            <strong>Disabled</strong>
          </div>
          <div className='col'>
            <strong>Delete</strong>
          </div>
          <div className='col'>
            <strong>Edit</strong>
          </div>
        </div>
      </li>

      {deviceList.map((device, index) => (
              <Device key={index} id = {device.id} name = {device.name} description = {device.description} disabled = {device.disabled} />
      ))}
    </ul>
  </div>
);

DeviceList.propTypes = {
  deviceList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      disabled: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired
};

export default DeviceList;