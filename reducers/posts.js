import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
} from '../actions/types';

const INITIAL_STATE = {
  posts: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_POSTS:
    return { ...state, loading: true };
  case GET_POSTS_SUCCESS:
    return { ...state, loading: false, posts: ['Example Post'] };
  case GET_POSTS_FAILURE:
    return { ...state, loading: false, posts: [], error: action.error };
  default:
    return state;
  }
}
