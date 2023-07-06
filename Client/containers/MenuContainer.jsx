/**
 * ************************************
 *
 * @module
 * @author Eivind Del Fierro, Morah Geist
 * @date 07/2023
 * @description drop down menu item for selecting stretch target muscle group and difficulty
 * question: can we pass the data from the drop down menus in menu container to the stretch container to render the stretch components? menu container and stretch container are siblings, do we need a parent to hold both containers?
 *
 * ************************************
 */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../actionCreator/actionCreator.js';

const MenuContainer = (prop) => {
  const dispatch = useDispatch();
  const state = useSelector( state => state.stretch);

  const refreshExercises = async () => {
    const muscle = document.getElementById('muscle').value;
    const difficulty = document.getElementById('difficulty').value;
    await fetch(
      `http://localhost:3000/api?muscle=${muscle}&difficulty=${difficulty}&type=stretching`
    )
      .then((data) => data.json())
      .then((data) => {
        dispatch(actions.updateDifficultyAndMuscle([muscle, difficulty]));
        return dispatch(actions.updateExercisesFromAPI(data));
      })
      .catch((error) => console.log('Error in MenuContainer.jsx fetch', error));
  };

  const showFavorites = () => {
    return dispatch(actions.updateExercisesFromAPI(state.favorites))
  }

  return (
    <div>
      <select
        className="muscle"
        id="muscle"
        onChange={refreshExercises}
      >
        <option value="null">Select a muscle</option>
        <option value="abdominals">Abdominals</option>
        <option value="abductors">Abductors</option>
        <option value="adductors">Adductors</option>
        <option value="biceps">Biceps</option>
        <option value="calves">Calves</option>
        <option value="chest">Chest</option>
        <option value="forearms">Forearms</option>
        <option value="glutes">Glutes</option>
        <option value="hamstrings">Hamstrings</option>
        <option value="lats">Lats</option>
        <option value="lower_back">Lower Back</option>
        <option value="middle_back">Middle Back</option>
        <option value="neck">Neck</option>
        <option value="quadriceps">Quadriceps</option>
        <option value="traps">Traps</option>
        <option value="triceps">Triceps</option>
      </select>
      <select
        className="difficulty"
        id="difficulty"
        onChange={refreshExercises}
      >
        <option value="null">Select a difficulty</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="expert">Expert</option>
      </select>

      <button className="favBtn" onClick={showFavorites}>Favorites</button>
    </div>
  );
};

export default MenuContainer;