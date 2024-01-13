/**
 * ************************************
 *
 * @module  App.jsx
 * @author Eivind Del Fierro, Morah Geist
 * @date 07/2023
 * @description index file to render app
 *
 * ************************************
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store.js';
import App from './App.jsx';
// import './stylesheets/styles.css';
import styles from './stylesheets/application.scss';
import WelcomeScreen from './containers/WelcomeScreen.jsx';

// render app from App.jsx file on the html element with id of app in the index.html page
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <Provider store={store}>
    <div id="overlay">
      <WelcomeScreen />
    </div>
    <App />
  </Provider>
);
