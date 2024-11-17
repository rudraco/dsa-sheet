// Importing necessary libraries
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'; // Importing the main App component
import './index.css'; // Importing global styles (if any)

// Rendering the App component into the root element in the HTML
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // The root element where the app will be mounted
);