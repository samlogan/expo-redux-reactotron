import { GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAILURE } from '../actions/types';

const INITIAL_STATE = {
  items: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, loading: true, items: [] };
    case GET_POSTS_SUCCESS:
      return { ...state, loading: false, items: ['Example Post'] };
    case GET_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        items: [],
        error: action.error,
      };
    default:
      return state;
  }
};
