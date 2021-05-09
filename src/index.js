import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {applyMiddleware, createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

// declares reducer to store feedback data until it is ready to be sent to the server
const feedbackReducer = (state = {}, action) => {
  if (action.type === `ADD_FEEDBACK`) {
    return {...state, [action.payload.property]: action.payload.value};
  }
  if (action.type ===`CLEAR_FEEDBACK`) {
    return {}
  }
  return state
}

// declares store for reducer(s)
const storeInstance = createStore(
  combineReducers({
    feedbackReducer
  }),
  applyMiddleware(
    logger
  )
)

ReactDOM.render(
  <Provider store={storeInstance}>
<App />
</Provider>,
 document.getElementById('root'));
registerServiceWorker();
