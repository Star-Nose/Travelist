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

    case types.SUBMIT_LOGIN:
      const event = action.payload;
      // if (event.target.checkValidity() === false) {
      //   event.preventDefault();
      //   event.stopPropogation();
      //   return state;
      // }

      // add fetch request to check on login info
      let valid = false;

      axios.post('/api/user-validation', state.login)
        .then((response) => {
          console.log(response.data);
          if (response.data.length === 0) return { ...state };// /signup
          // return /main
          valid = true;
        })
        .catch((err) => console.log('Error in SUBMIT_LOGIN Reducer', err));
      console.log(valid);

      return { ...state };

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

    default:
      return state;
  }
};

export default formReducer;
