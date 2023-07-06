/**
 * ************************************
 *
 * @module  stretchReducer
 * @author Eivind Del Fierro, Morah Geist
 * @date 07/2023
 * @description reducer for stretch
 *
 * ************************************
 */
import * as types from '../constant/actionTypes.js';

const initialState = {
  exercisesFromAPI: [],
  loggedInUser: '',
  favorites: [],
  muscle: '',
  difficulty: '',
};

const stretchReducer = (state = initialState, action) => {
  switch (action.type) {
    // Get's a list of exercises from the server and updates the array with objects of exercises
    case types.UPDATE_FROM_API: {
      return { ...state, exercisesFromAPI: action.payload };
    }

    // Logs user on
    case types.USER_LOG_ON: {
      // get authentication status of user
      document.getElementById('usernameLogin').value = '';
      document.getElementById('passwordLogin').value = '';
      document.getElementById('usernameSignup').value = '';
      document.getElementById('passwordSignup').value = '';
      document.getElementById('passwordSignupConfirm').value = '';
      return {
        ...state,
        loggedInUser: action.payload.username,
        favorites: action.payload.favorites,
      };
    }

    // Logs user off
    case types.USER_LOG_OFF: {
      // reset the state including the logged-in user
      return { ...initialState };
    }

    case types.UPDATE_MUSCLE_DIFFICULTY: {
      const [muscle, difficulty] = action.payload;
      return { ...state, muscle: muscle, difficulty, difficulty };
    }

    case types.ADD_FAVORITE: {
      // communicate with the server
      fetch('http://localhost:3000/user/favorite', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({username: state.loggedInUser, favorite: action.payload}),
      })
        .then((data) => data.json())
        .then( data => {
          return {
            ...state, 
            favorites: data.favorites, 
            exercisesFromAPI: data.favorites
          }
        })
        .catch( error => console.log('Error while adding favorites'))
    }

    case types.REMOVE_FAVORITE: {
      fetch('http://localhost:3000/user/favorite', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({username: state.loggedInUser, favorite: action.payload}),
      })
        .then((data) => data.json())
        .then( data => {
          return {
            ...state, 
            favorites: data.favorites, 
            exercisesFromAPI: data.favorites
          }
        })
        .catch( error => console.log('Error while removing favorites'))
    }

    default:
      return state;
  }
};

export default stretchReducer;