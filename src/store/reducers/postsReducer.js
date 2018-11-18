import * as ActionType from '../actions/ActionType';
import initialState from './initialState';
import _ from 'lodash';

const postsReducer = (state = initialState.postsReducer, action) => {
  switch (action.type) {
    case ActionType.GET_POSTS_RESPONSE: {
      // '...' spread operator clones the state
      // lodash Object assign simply clones action.posts into a new array.
      // The return object is a copy of state and overwrites the state.posts with a fresh clone of action.posts
      return {
        ...state,
        posts: _.assign(action.posts),
      };
    }

    default: {
      return state;
    }
  }
};

export default postsReducer;
