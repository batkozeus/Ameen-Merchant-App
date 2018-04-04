import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import "react-dates/initialize";
import './index.css';
import App from 'components/App/App';


ReactDOM.render(
  <BrowserRouter basename="/Ameen-Merchant-App/build">
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);