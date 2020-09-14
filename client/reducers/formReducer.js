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
      // console.log('LOGIN INPUT', id, value);
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
      if (action.payload.length > 0) validated = true;
      return {
        ...state,
        login: {
          ...state.login,
          validated,
        },
      };

    default:
      return state;
  }
};

export default formReducer;
