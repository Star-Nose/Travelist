import { combineReducers } from 'redux';

import travelReducer from './travelReducer';

const combinedReducers = combineReducers({
  trips: travelReducer,
});

export default combinedReducers;
