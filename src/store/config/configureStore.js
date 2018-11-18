import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from '../reducers/auth';
import authorReducer from '../reducers/authorReducer';
import coursesReducer from '../reducers/coursesReducer';
import selectedCourseReducer from '../reducers/selectedCourseReducer';
import postsReducer from '../reducers/postsReducer';
import selectedPostReducer from '../reducers/selectedPostReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      postsReducer,
      selectedPostReducer,
      authorReducer,
      coursesReducer,
      selectedCourseReducer,
      auth: authReducer,
      form: formReducer,
    }),
    composeEnhancers(applyMiddleware(thunk)),
  );

  return store;
};
