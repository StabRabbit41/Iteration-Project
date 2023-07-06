/**
 * ************************************
 *
 * @module  Stretch
 * @author Eivind Del Fierro, Morah Geist
 * @date 07/2023
 * @description stretch box
 *
 * ************************************
 */

import React from 'react';
import { Link } from 'react-router-dom';
import LabeledText from './LabeledText.jsx';
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regStar } from '@fortawesome/free-regular-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../actionCreator/actionCreator.js';

const fetchCall = async (user, favorite, method) => {
  return await fetch('http://localhost:3000/user/favorite', {
    method: method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: user,
      favorite: favorite,
    }),
  }).then((data) => data.json());
};

const Stretch = (props) => {
  const thisExercise = props.exercises;
  const dispatch = useDispatch();
  const state = useSelector((state) => state.stretch);
  // insert any logic for the Stretch here
  let FavIcon;

  const favClicked = async () => {
    const userFavorites = state.favorites;
    const favorite = thisExercise;
    const user = state.loggedInUser;
    console.log('fav clicked');
    if (userFavorites.includes(thisExercise)) {
      console.log('...and deleting');
      const { favorites } = await fetchCall(user, favorite, 'DELETE');
      return dispatch(actions.updateREMOVE_FAVORITE(favorites));
    } else {
      console.log('adding');
      const { favorites } = await fetchCall(user, favorite, 'PATCH');
      return dispatch(actions.updateADD_FAVORITE(favorites));
    }
    // get the element property from the event
    // add the exercise object to the favorites array
  };

  // return stretch component with passed-in thisExercise from query to server
  return (
    <div className='stretchCard'>
      <div className='cardHeadBox'>
        <h3 className='cardHeader'>{thisExercise.name}</h3>
        <h3 className='cardHeader'>{thisExercise.name}</h3>
        {/* need logic to make Fav Icon then comment this back in and delete other */}
        <span className='favIcon'>
          <FAIcon onClick={favClicked} icon={regStar} />
        </span>
      </div>
      <ul>
        <li>
          <LabeledText label='Equipment' text={thisExercise.equipment} />
        </li>
        <li>
          <LabeledText label='Difficulty' text={thisExercise.difficulty} />
        </li>
        <li>
          <LabeledText label='Instructions' text={thisExercise.instructions} />
        </li>
      </ul>
    </div>
  );
};

export default Stretch;
