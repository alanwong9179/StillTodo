import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from 'recoil'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <RecoilRoot>
    <App />
    </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
