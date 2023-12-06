import React, { useContext , useState} from 'react';
import ReactDOM from 'react-dom/client';
import SeatPage from './SeatPage';
import reportWebVitals from './reportWebVitals';
import './SeatPage.css';
import { createContext} from 'react';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <SeatPage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
