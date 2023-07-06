/**
 * ************************************
 *
 * @module Header
 * @author Eivind Del Fierro, Morah Geist
 * @date 07/2023
 * @description header feature on main page of app
 *
 * ************************************
 */

import React from 'react';
import * as actions from '../actionCreator/actionCreator.js';
import { useDispatch } from 'react-redux';

const HeaderContainer = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(actions.updateUSER_LOG_OFF());
    const overlay = document.getElementById('overlay');
    overlay.style.opacity = 1;
    overlay.style.display = 'block'
  };

  return (
    <div className='appHeaderBox'>
      <h4 className='mainHeader'>Stretch</h4>
      <button onClick={logoutHandler} className='logoutBtn'>
        Logout
      </button>
    </div>
  );
};

export default HeaderContainer;
