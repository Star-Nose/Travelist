import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import combinedReducers from './reducers/index';

// store will hold our reducers and always reflect the one source of truth
const store = createStore(
  combinedReducers,
  // composeWithDevTools()
);

export default store;
