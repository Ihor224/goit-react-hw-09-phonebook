import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.store}>
      <PersistGate persistor={store.persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
