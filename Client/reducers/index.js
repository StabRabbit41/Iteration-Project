/**
 * ************************************
 *
 * @module  stretchReducer
 * @author Eivind Del Fierro, Morah Geist
 * @date 07/2023
 * @description combine reducers
 *
 * ************************************
 */

import { combineReducers } from 'redux';
import stretchReducer from './stretchReducer';

const reducers = combineReducers({
  stretch: stretchReducer,
});

export default reducers;
