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

    default:
      return state;
  }
};

export default formReducer;