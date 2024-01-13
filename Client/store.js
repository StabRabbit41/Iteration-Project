/**
 * ************************************
 *
 * @module  Store
 * @author Eivind Del Fierro, Morah Geist
 * @date 07/2023
 * @description redux store
 *
 * ************************************
 */

import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';

const store = configureStore({ reducer: reducers });

export default store;
