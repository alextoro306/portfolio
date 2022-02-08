import React from 'react';
import ReactDOM from 'react-dom';
import App from './Apps/App';
import reportWebVitals from './reportWebVitals';
import DarkmodeContextProvider from "./darkmode/darkmodeContextProvider"

ReactDOM.render(
  <React.StrictMode>
    <DarkmodeContextProvider>
    <App />
    </DarkmodeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
