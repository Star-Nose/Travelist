import * as types from '../constants/actionTypes';
import axios from 'axios';

const initialState = {
  signUp: {
    firstName: '',
    email: '',
    username: '',
    password: '',
    confirmedPassword: '',
  },
  logIn: {
    username: '',
    password: '',
  },
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SUBMIT_SIGNUP_FORM:
      console.log(action.payload);
      axios
        .post('/signup', action.payload)
        .then((response) => {
          console.log('in reducer --> ', response);
        })
        .catch((err) => console.log('err in reducer: ', err));

      return {
        ...state,
        signUp: {
          ...state.signUp,
          ...action.payload,
        },
      };
    case types.SIGNUP_FORM_INPUT: {
      const { name, value } = action.payload;
      // console.log('name: ', name);
      // console.log('value: ', value);
      // console.log('state: ', state);
      return {
        ...state,
        signUp: {
          ...state.signUp,
          [name]: value,
        },
      };
    }

    default:
      return state;
  }
};

export default formReducer;
