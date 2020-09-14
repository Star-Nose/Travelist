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

export { addCount, submitSignupForm, getActivities, newPlans, newLocationInput };
