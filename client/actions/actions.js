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

const getActivities = (tripId) => ({
  type: types.GET_ACTIVITIES,
  payload: tripId,
});

const newPlans = (plans) => ({
  type: types.NEW_PLANS,
  payload: plans,
});

const newLocationInput = (location) => ({
  type: types.NEW_LOCATION_INPUT,
  payload: location,
});

const signupFormInput = (formInput) => ({
  type: types.SIGNUP_FORM_INPUT,
  payload: formInput,
});

const loginInput = (formInput) => ({
  type: types.LOGIN_INPUT,
  payload: formInput,
});

const activityFormInput = (formInput) => ({
  type: types.ACTIVITY_FORM_INPUT,
  payload: formInput,
});

const activityFormSubmit = (formInput) => ({
  type: types.SUBMIT_ACTIVITY_FORM,
  payload: formInput,
});

const addActivity = (newActivity) => ({
  type: types.ADD_ACTIVITIES,
  payload: newActivity,
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

const loginKeyDown = (e) => ({
  type: types.LOGIN_KEYDOWN,
  payload: e.keyCode,
});

export {
  addCount,
  submitSignupForm,
  loginInput,
  validateLogin,
  signupFormInput,
  getActivities,
  newPlans,
  newLocationInput,
  loginKeyDown,
  activityFormInput,
  activityFormSubmit,
  addActivity,
};
