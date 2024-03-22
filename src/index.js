import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import './font/RobotoSerif-Black.ttf';
import './font/RobotoSerif-Bold.ttf';
import './font/RobotoSerif-BoldItalic.ttf';
import './font/RobotoSerif-Medium.ttf';
import './font/RobotoSerif-MediumItalic.ttf';
import './font/RobotoSerif-Regular.ttf';
import './font/RobotoSerif-Italic.ttf';
import './font/RobotoSerif-Light.ttf';
import './font/RobotoSerif-LightItalic.ttf';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
