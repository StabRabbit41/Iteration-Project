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
  showFavorites: false,
  muscle: '',
  difficulty: '',
};

const stretchReducer = (state = initialState, action) => {
  switch (action.type) {
    // Get's a list of exercises from the server and updates the array with objects of exercises
    case types.UPDATE_FROM_API: {
      return {
        ...state,
        exercisesFromAPI: action.payload,
      };
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
      console.log(action);
      // communicate with the server
      console.log(types.ADD_FAVORITE);
      console.log('add called');
      return {
        ...state,
        favorites: action.payload,
      };
    }

    case types.REMOVE_FAVORITE: {
      console.log(action);
      console.log('case:', types.REMOVE_FAVORITE);
      console.log('delete called');
      return {
        ...state,
        favorites: action.payload,
      };
    }

    case types.SHOW_FAVORITE: {
      return {
        ...state,
        showFavorites: !state.showFavorites,
      };
    }

    default:
      return state;
  }
};

export default stretchReducer;
