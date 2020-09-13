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

export { addCount, submitSignupForm, submitLogin };
