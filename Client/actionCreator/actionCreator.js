import * as types from '../constant/actionTypes';

export const updateExercisesFromAPI = (array) => ({
  type: types.UPDATE_FROM_API,
  payload: array,
});

export const updateUSER_LOG_ON = (userObj) => ({
  type: types.USER_LOG_ON,
  payload: userObj,
});

export const updateUSER_LOG_OFF = () => ({
  type: types.USER_LOG_OFF,
});

export const updateDifficultyAndMuscle = ([muscle, difficulty]) => ({
  type: types.UPDATE_MUSCLE_DIFFICULTY,
  payload: [muscle, difficulty]
})

export const updateADD_FAVORITE = (obj) => ({
  type: types.ADD_FAVORITE,
  payload: obj
})

export const updateREMOVE_FAVORITE = (obj) => ({
  type: types.REMOVE_FAVORITE,
  payload: obj
})