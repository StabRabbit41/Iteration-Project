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
  props = props.exercises;
  const dispatch = useDispatch();
  const state = useSelector( state => state.stretch)
  // insert any logic for the Stretch here
  let FavIcon;

  const favClicked = () => {
    
    const userFavorites = state.favorites

    if (userFavorites.includes(props)) {
      return dispatch(actions.updateREMOVE_FAVORITE(props))
    } else {
      return dispatch(actions.updateADD_FAVORITE(props))
    }
    // get the element property from the event
    // add the exercise object to the favorites array
  }

  // return stretch component with passed-in props from query to server
  return (
    <div className="stretchCard">
      <div className="cardHeadBox">
        <h3 className="cardHeader">{props.name}</h3>
        {/* need logic to make Fav Icon then comment this back in and delete other */}
        <span className="favIcon">
          <FAIcon onClick={favClicked} icon={regStar} />
        </span>
      </div>
      <ul>
        <li>
          <LabeledText label="Equipment" text={props.equipment} />
        </li>
        <li>
          <LabeledText label="Difficulty" text={props.difficulty} />
        </li>
        <li>
          <LabeledText label="Instructions" text={props.instructions} />
        </li>
      </ul>
    </div>
  );
};
export default Stretch;
