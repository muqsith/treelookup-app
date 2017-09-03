import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducers from '../reducers/reducers.js';

const loggerMiddleware = createLogger();

/**
 * store shape:
 *  {
 *    number: '',
 *    path: '',
 *    status: ''
 *  }
 */

let store = createStore(
    reducers,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  );
  
  export default store;