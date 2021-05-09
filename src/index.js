import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {applyMiddleware, createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

const feedbackReducer = (state = {}, action) => {
  if (action.type === `ADD_FEEDBACK`) {
    return {...state, [action.payload.property]: action.payload.value};
  }
  if (action.type ===`CLEAR_FEEDBACK`) {
    return {}
  }
  return state
}

// const feelingReducer = (state = [], action) => {
//   if (action.type === `ADD_FEELING`) {
//     return [...state, action.payload];
//   }
//   if (action.type ===`CLEAR_FEEDBACK`) {
//     return []
//   }
//   return state;
// }

// const feelingReducer = (state = [], action) => {
//   if (action.type === `ADD_FEELING`) {
//     return [...state, action.payload];
//   }
//   if (action.type ===`CLEAR_FEEDBACK`) {
//     return []
//   }
//   return state;
// }

// const feelingReducer = (state = [], action) => {
//   if (action.type === `ADD_FEELING`) {
//     return [...state, action.payload];
//   }
//   if (action.type ===`CLEAR_FEEDBACK`) {
//     return []
//   }
//   return state;
// }

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
