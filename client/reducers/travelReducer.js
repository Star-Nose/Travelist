// import our actiontypes from constants/actionsTypes;
import * as types from '../constants/actionTypes';

import axios from 'axios';

const initialState = {
  count: 0,
  trips: [],
};

const travelReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_COUNT: {
      const count = state.count + 1;
      return { ...state, count };
    }
    case types.GET_ACTIVITIES: {
      const { payload } = action;
      // const { trips } = initialState;
      // axios.get('/:userId/Activities')
      //   .then(res => {
      //     trips = res.rows
      //   })
      //   .catch('error inside of getActivities', err);
      console.log(payload);
      return { ...state };
    }
    // this action will show or hide the modal inside of the Activities Container
    default:
      return state;
  }
};
``
export default travelReducer;
