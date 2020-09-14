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

const signupFormInput = (formInput) => ({
  type: types.SIGNUP_FORM_INPUT,
  payload: formInput,
});

const loginInput = (formInput) => ({
  type: types.LOGIN_INPUT,
  payload: formInput,
});

const validateLogin = (username, password) => (dispatch) => {
  axios
    .post('/api/user-validation', { username, password })
    .then((response) =>
      dispatch({
        type: types.VALID_LOGIN,
        payload: response.data,
      })
    )
    .catch((err) => console.log('Error in SUBMIT_LOGIN Reducer', err));
};

export {
  addCount,
  submitSignupForm,
  loginInput,
  validateLogin,
  signupFormInput,
};
