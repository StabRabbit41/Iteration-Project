/**
 * ************************************
 *
 * @module Body
 * @author Eivind Del Fierro, Morah Geist, Diane Moon
 * @date 07/2023
 * @description header feature on main page of app
 *
 * ************************************
 */

import React from 'react';
import * as actions from '../actionCreator/actionCreator.js';
import { useDispatch, useSelector } from 'react-redux';

const HeaderContainer = () => {
  const username = useSelector((state) => state.stretch.loggedInUser);

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(actions.updateUSER_LOG_OFF());
    const overlay = document.getElementById('overlay');
    overlay.style.opacity = 1;
    overlay.style.display = 'block'
  };

  return (
    <div className='appHeaderBox'>
      <div className='appHeaderSubBox1'>
        <h4 className='headerStatement'>Ready to stretch, {username}?</h4>
        <button onClick={logoutHandler} className='logoutBtn'>
          Logout
        </button>
      </div>
      <p className='headerInstructions'>You know what to do. Select your muscle group and difficulty level from the menus. Then start your timer! </p>
    </div>
  );
};

export default HeaderContainer;
