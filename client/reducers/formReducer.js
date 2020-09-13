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

    default:
      return state;
  }
};
