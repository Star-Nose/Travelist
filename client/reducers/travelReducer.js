// import our actiontypes from constants/actionsTypes;

const initialState = {
  count: 0,
};

const travelReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_COUNT:
      // some functionality increasing count by 1
      return state;
    default:
      return state;
  }
};

export default travelReducer;
