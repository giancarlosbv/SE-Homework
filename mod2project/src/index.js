import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SettingsContextProvider from './context/SettingsContext';
import App1 from './App1';


ReactDOM.render(
  <SettingsContextProvider>
    <App1 />
  </SettingsContextProvider>,
  document.getElementById('root')
);

