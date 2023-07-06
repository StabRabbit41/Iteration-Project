/**
 * ************************************
 *
 * @module
 * @author Eivind Del Fierro, Morah Geist
 * @date 07/2023
 * @description main app container rendering 3 child containers
 *
 * ************************************
 */

import React from 'react';
import HeaderContainer from './containers/HeaderContainer.jsx';
import TimerContainer from './containers/TimerContainer.jsx';
import MenuContainer from './containers/MenuContainer.jsx';
import StretchContainer from './containers/StretchContainer.jsx';
import './stylesheets/application.scss';

// Init func app that returns our main containers
const App = () => {
  return (
    <div className="mainApp">
      <HeaderContainer />
      <TimerContainer />
      <MenuContainer />
      <StretchContainer />
    </div>
  );
};

export default App;
