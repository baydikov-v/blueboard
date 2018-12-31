import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import fileApi from './middleware/fileApi'
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(
      thunk,
      fileApi
    )
  )
);

export default store;