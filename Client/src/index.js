import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { Provider } from 'react-redux';
import { configStore } from './store';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import './App.css';

const store = configStore();
const persistor = persistStore(store);
ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={<div className='loader'></div>}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
