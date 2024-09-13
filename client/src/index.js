import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "state"; // our jsconfig.json sets baseUrl to "src" so we don't need to provide the path ./src/state every time
import { Provider } from "react-redux";

const  store = configureStore({
  reducer: {
    global: globalReducer,
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />  
    </Provider>
  </React.StrictMode>
);

