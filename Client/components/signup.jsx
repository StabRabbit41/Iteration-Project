import React from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../actionCreator/actionCreator.js';

const signup = () => {
  const dispatch = useDispatch();

  const signupFunc = (event) => {
    event.preventDefault();
    const username = document.getElementById('usernameSignup').value;
    const password1 = document.getElementById('passwordSignup').value;
    const password2 = document.getElementById('passwordSignupConfirm').value;

    // check if passwords match
    if (password1 !== password2) {
      return alert('Sign up passwords do not match');
    }

    fetch('http://localhost:3000/user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password: password1 }),
    })
      .then((data) => data.json())
      .then((data) => {
        // if there is an error object
        if (data.err) alert(data.err);
        // update logged in user
        dispatch(actions.updateUSER_LOG_ON(data));
        // disable opacity
        const overlay = document.getElementById('overlay');
        overlay.style.opacity = 0;
        setTimeout(() => overlay.style.display = 'none', 1000);
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="signupDiv">
      <form>
        <input type="text" id="usernameSignup" placeholder="Username"></input>
        <input
          type="password"
          id="passwordSignup"
          placeholder="Password"
        ></input>
        <input
          type="password"
          id="passwordSignupConfirm"
          placeholder="Confirm Password"
        ></input>
        <button className="signupBtn" onClick={(event) => signupFunc(event)}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default signup;
