import React from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../actionCreator/actionCreator.js';

const login = () => {
  const dispatch = useDispatch();

  const loginFunc = (event) => {
    event.preventDefault();
    const un = document.getElementById('usernameLogin').value;
    const pw = document.getElementById('passwordLogin').value;

    const loginObj = {
      username: un,
      password: pw,
    };

    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginObj),
    })
      .then((data) => data.json())
      .then((data) => {
        if (!data.err) {
          console.log(data);
          // Do something
          // change logged in user state with the returned userState
          dispatch(actions.updateUSER_LOG_ON(data));

          // disable opacity
          const overlay = document.getElementById('overlay');
          overlay.style.opacity = 0;
          setTimeout(() => overlay.style.display = 'none', 1000);
        } else {
          alert(data.err);
        }
      })
      .catch((error) => alert('Invalid Username/Password'));
  };

  return (
    <div className="loginDiv">
      <form>
        <input type='text' id='usernameLogin' placeholder='Username'></input>
        <input
          type='password'
          id='passwordLogin'
          placeholder='Password'
        ></input>
        <button className="loginBtn" onClick={(event) => loginFunc(event)}>
          Login
        </button>
      </form>
    </div>
  );
};

export default login;
