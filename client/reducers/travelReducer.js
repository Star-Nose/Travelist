// import our actiontypes from constants/actionsTypes;
import * as types from '../constants/actionTypes';

const initialState = {
  count: 0,
};

const travelReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_COUNT: {
      const count = state.count + 1;
      return { ...state, count };
    }
    default:
      return state;
  }
};

export default travelReducer;
