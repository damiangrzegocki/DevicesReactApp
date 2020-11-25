import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { loadDeviceList } from './actions';
import deviceApp from './reducers';
import rootSaga from './sagas';
import App from './App';
import './index.css';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(deviceApp, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

store.dispatch(loadDeviceList());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);