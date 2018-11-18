import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import coursesReducer from './coursesReducer';
import postsReducer from './postsReducer';
import selectedCourseReducer from './selectedCourseReducer';
import selectedPostReducer from './selectedPostReducer';
import authorReducer from './authorReducer';
import apiReducer from './apiReducer';

export default combineReducers({
  coursesReducer,
  selectedCourseReducer,
  postsReducer,
  selectetPostReducer,
  authorReducer,
  apiReducer,
  form: formReducer,
});
