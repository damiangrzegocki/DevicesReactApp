import { connect } from 'react-redux';
import DeviceList from '../components/DeviceList';

const mapStateToProps = state => {
  return {
    deviceList: state.deviceList
  };
};

const DeviceListContainer = connect(mapStateToProps)(DeviceList);

export default DeviceListContainer;