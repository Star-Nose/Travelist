import * as types from '../constants/actionTypes';

const initialState = {
  signUp: {
    name: '',
    email: '',
    username: '',
    password: '',
  },
  logIn: {
    username: '',
    password: '',
  },
  newPlans: {
    newLocation: '',
    country: '',
  },
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_UP_SUBMIT:
      return {
        ...state,
        signUp: {
          ...action.payload,
        },
      };
    case types.NEW_PLANS:
      return {
        ...state,
        newPlans: {
          ...action.payload,
        },
      };

    case types.NEW_LOCATION_INPUT:
      const newLocation = action.payload.target.value;
      console.log(state.newPlans.newLocation);
      return {
        ...state,
        newPlans: {
          ...state.newPlans,
          newLocation,
        },
      };
    default:
      return state;
  }
};

export default formReducer;
