import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ShoppingContext from "./components/ShoppingContext"

ReactDOM.render(
  <React.StrictMode>
    <ShoppingContext.Provider value={1}>
      <App />
    </ShoppingContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

