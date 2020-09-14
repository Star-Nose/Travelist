import axios from 'axios';
import * as types from '../constants/actionTypes';

const initialState = {
  signUp: {
    name: '',
    email: '',
    username: '',
    password: '',
  },
  login: {
    username: '',
    password: '',
    validated: false,
    loginAttempts: 0,
  },
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SUBMIT_SIGNUP_FORM:
      return {
        ...state,
        signUp: {
          ...action.payload,
        },
      };

    case types.LOGIN_INPUT:
      const { id, value } = action.payload.target;
      console.log('STATE VALUE', state.login);
      return {
        ...state,
        login: {
          ...state.login,
          [id]: value,
        },
      };

    case types.VALID_LOGIN:
      console.log('VALID LOGIN', action.payload);
      let validated = false;
      let { loginAttempts } = state.login;

      if (action.payload.length > 0) validated = true;
      loginAttempts += 1;

      return {
        ...state,
        login: {
          ...state.login,
          validated,
          loginAttempts,
        },
      };

    default:
      return state;
  }
};

export default formReducer;
