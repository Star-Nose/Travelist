import * as types from '../constants/actionTypes';

const initialState = {
  signUp: {
    name: '',
    email: '',
    username: '',
    password: '',
  },
  logIn: {
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
      console.log("Event", event);
      console.log("Event.Value", event.value);
      console.log("Event.Target", event.target);
      if (formReducer.checkValidity() === false) {
        event.preventDefault();
        event.stopPropogation();
      }
      return {
        ...state,
        login: {
          ...action.payload,
        },
      };

    default:
      return state;
  }
};

export default formReducer;
