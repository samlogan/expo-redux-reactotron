import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE
} from './types';

export const getPosts = (state, category, searchTerm, page, existingPosts) => async (dispatch) => {
  try {
    dispatch({ type: GET_POSTS });
    dispatch({ type: GET_POSTS_SUCCESS });
  } catch (error) {
    dispatch({ type: GET_POSTS_FAILURE, error });
  }
}
