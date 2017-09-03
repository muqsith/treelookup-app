import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducers from '../reducers/reducers.js';


let middlewares = [thunkMiddleware];

if (process.env['NODE_ENV'] === 'dev') {
  const loggerMiddleware = createLogger();
  middlewares = middlewares.concat(loggerMiddleware);
}

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
    applyMiddleware(...middlewares)
  );
  
  export default store;