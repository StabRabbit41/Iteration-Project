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
import { useDispatch, useSelector} from 'react-redux'
import * as actions from '../actionCreator/actionCreator.js'

const Stretch = (props) => {
  const thisExercise = props.exercises;
  const dispatch = useDispatch();
  const state = useSelector( state => state.stretch)
  // insert any logic for the Stretch here
  let FavIcon;

  const favClicked = () => {
    
    const userFavorites = state.favorites
    let found = false

    userFavorites.forEach ( exercise => {
      if (exercise == thisExercise) {
        found = true
      }
    });

    return (found) ? dispatch(actions.updateREMOVE_FAVORITE(thisExercise)) : dispatch(actions.updateADD_FAVORITE(thisExercise));
    // get the element property from the event
    // add the exercise object to the favorites array
  }

  // return stretch component with passed-in props from query to server
  return (
    <div className="stretchCard">
      <div className="cardHeadBox">
        <h3 className="cardHeader">{thisExercise.name}</h3>
        {/* need logic to make Fav Icon then comment this back in and delete other */}
        <span className="favIcon">
          <FAIcon onClick={favClicked} icon={regStar} />
        </span>
      </div>
      <ul>
        <li>
          <LabeledText label="Equipment" text={thisExercise.equipment} />
        </li>
        <li>
          <LabeledText label="Difficulty" text={thisExercise.difficulty} />
        </li>
        <li>
          <LabeledText label="Instructions" text={thisExercise.instructions} />
        </li>
      </ul>
    </div>
  );
};
export default Stretch;
