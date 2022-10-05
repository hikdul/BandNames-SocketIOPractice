import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //! este es el que valida tanto estados deprecables como genera duplicados de cada componente
  //? investigar mas sobre el React.StrictMode
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
