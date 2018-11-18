import * as ActionType from './ActionType';
import PostApi from '../../api/PostApi';
import { ApiCallBeginAction, ApiCallErrorAction } from './ApiAction';

export const getPostsResponse = posts => ({
  type: ActionType.GET_POSTS_RESPONSE,
  posts,
});

export function getPostsAction() {
  return dispatch => {
    dispatch(ApiCallBeginAction());

    return PostApi.getAllPosts()
      .then(posts => {
        dispatch(getPostsResponse(posts));
      })
      .catch(error => {
        throw error;
      });
  };
}

export const addNewPostResponse = () => ({
  type: ActionType.ADD_NEW_POST_RESPONSE,
});

export const updateExistingPostResponse = () => ({
  type: ActionType.UPDATE_EXISTING_POST_RESPONSE,
});

export function savePostAction(postBeingAddedOrEdited) {
  return function(dispatch) {
    dispatch(ApiCallBeginAction());

    //if authorId exists, it means that the post is being edited, therefore update it.
    //if authorId doesn't exist, it must therefore be new post that is being added, therefore add it
    return PostApi.savePost(postBeingAddedOrEdited)
      .then(() => {
        if (postBeingAddedOrEdited.id) {
          dispatch(updateExistingPostResponse());
        } else {
          dispatch(addNewPostResponse());
        }
      })
      .then(() => {
        dispatch(getPostsAction());
      })
      .catch(error => {
        dispatch(ApiCallErrorAction());
        throw error;
      });
  };
}

export const getPostResponse = postFound => ({
  type: ActionType.GET_POST_RESPONSE,
  post: postFound,
});

export function getPostAction(postId) {
  return dispatch => {
    dispatch(ApiCallBeginAction());

    return PostApi.getPost(postId)
      .then(post => {
        dispatch(getPostResponse(post));
      })
      .catch(error => {
        throw error;
      });
  };
}

export const deletePostResponse = () => ({
  type: ActionType.DELETE_POST_RESPONSE,
});

export function deletePostAction(postId) {
  return dispatch => {
    dispatch(ApiCallBeginAction());

    return PostApi.deletePost(postId)
      .then(() => {
        dispatch(deletePostResponse());
      })
      .then(() => {
        dispatch(getPostsAction());
      })
      .catch(error => {
        throw error;
      });
  };
}
