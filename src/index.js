import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import App from './App';
import { Provider } from 'react-redux';
import reducer from "./reducer"

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);