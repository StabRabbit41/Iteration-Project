/**
 * ************************************
 *
 * @module
 * @author Eivind Del Fierro, Morah Geist
 * @date 07/2023
 * @description stretch container rendering stretch components based on search from drop down menus found in menu container
 * question: can we pass the data from the drop down menus in menu container to the stretch container to render the stretch components? menu container and stretch container are siblings, do we need a parent to hold both containers?
 *
 * ************************************
 */

import React from 'react';
import { useSelector } from 'react-redux';
import Stretch from '../components/Stretch.jsx';

// can pass in props and prop drill if you want
const StretchContainer = () => {
  const stretchList = useSelector((state) => state.stretch.exercisesFromAPI);
  const muscle = useSelector((state) => state.stretch.muscle);
  const difficulty = useSelector((state) => state.stretch.difficulty);
  // const muscle = document.getElementById('muscle').value;
  // const difficulty = document.getElementById('difficulty').value;

  const stretchArr = [];

  if (stretchList.length) {
    for (let i = 0; i < stretchList.length; i++) {
      const item = stretchList[i];
      stretchArr.push(<Stretch exercises={item} />);
    }
    return <div className="stretchCont">{stretchArr}</div>;
  }

  if (!muscle === 'null' || !difficulty === 'null') {
    return (
      <div>
        <p>Please select a muscle group and difficulty</p>
      </div>
    );
  }

  if (difficulty === 'null') {
    return (
      <div>
        <p>No {muscle} exercises found!</p>
      </div>
    );
  }

  return (
    <div>
      <p>
        No {difficulty !== 'null' ? difficulty : null}{' '}
        {muscle !== 'null' ? muscle : null} exercises found!
      </p>
    </div>
  );
};

export default StretchContainer;
