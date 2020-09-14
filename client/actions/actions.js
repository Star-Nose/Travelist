import axios from 'axios';
import * as types from '../constants/actionTypes';

// eslint-disable-next-line import/prefer-default-export
const addCount = () => ({
  type: types.ADD_COUNT,
  payload: null,
});

const submitSignupForm = (formInput) => ({
  type: types.SUBMIT_SIGNUP_FORM,
  payload: formInput,
});

const submitLogin = (formInput) => ({
  type: types.SUBMIT_LOGIN,
  payload: formInput,
});

const loginInput = (formInput) => ({
  type: types.LOGIN_INPUT,
  payload: formInput,
});

const validateLogin = () => function (dispatch) {
  axios.post('/api/user-validation', state.login)
    .then((response) => {
      if (response.data.length === 0) return { ...state };// /signup
      // return /main
      valid = true;
    })
    .catch((err) => console.log('Error in SUBMIT_LOGIN Reducer', err));
};

export {
  addCount, submitSignupForm, submitLogin, loginInput,
};
