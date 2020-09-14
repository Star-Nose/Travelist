import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import combinedReducers from './reducers/index';

// store will hold our reducers and always reflect the one source of truth
const store = createStore(
  combinedReducers,
  applyMiddleware(thunk),
);

export default store;
