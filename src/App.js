import React from 'react';
import { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AddDevice from './containers/AddDevice';
import DeviceListContainer from './containers/DeviceListContainer';

class App extends Component {
  render() {   
    return (
      <div>
        <Header />

        <main>
          <div className='container'>           
            <AddDevice />
            <DeviceListContainer />           
          </div>
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;