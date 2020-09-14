import * as types from '../constants/actionTypes';
import formReducer from '../reducers/formReducer';

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

export { addCount, submitSignupForm, signupFormInput };
