import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { axios_config } from './Axios/axios-config';
import './index.css';
import { store } from './Redux/store';
import reportWebVitals from './reportWebVitals';

const access_token = store.getState()
  axios_config.interceptors.request.use((config) => {
    if (access_token.account.token) {
      config.headers!.Authorization = `Bearer ${access_token.account.token}`;
    }
    console.log(config.headers)
    return config
  },
    (error) => Promise.reject(error)
  )
  
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
