import {
    ALL_POSTS_FAIL,
    ALL_POSTS_SUCCESS,
    CREATE_POST_FAIL,
    CREATE_POST_SUCCESS, FILTER_POSTS_FAIL,
    FILTER_POSTS_SUCCESS,
    POST_POST_FAIL,
    POST_POST_SUCCESS, UPDATE_POST_FAIL,
    UPDATE_POST_SUCCESS
} from "../actions/postAction";
  
  const initialState = {
    havePosts: false,
    posts: [],
    post: {},
    errors: {},
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case CREATE_POST_SUCCESS:
        return {
          ...state,
          posts: action.payload,
        };
      
      case ALL_POSTS_SUCCESS:
        return {
          ...state,
          posts: action.payload,
          havePosts: true,
        };
      case ALL_POSTS_FAIL:
        return {
          ...state,
          errors: true,
        };
      case POST_POST_SUCCESS:
        return {
          ...state,
          post: action.payload,
          havePost: true,
        };
      
      case CREATE_POST_FAIL:
        return {
          ...state,
          errors: true,
        };
  
      case POST_POST_FAIL:
        return {
          ...state,
          errors: true,
        };
  
      case UPDATE_POST_SUCCESS:
        return {
          ...state,
          post: action.payload,
        };
      case UPDATE_POST_FAIL:
        return {
          ...state,
          errors: true,
        };
      case FILTER_POSTS_SUCCESS:
        return {
          ...state,
          posts: action.payload,
          havePosts: true,
        };
      case FILTER_POSTS_FAIL:
        return {
          ...state,
          errors: true,
        };
  
      default:
        break;
    }
    return state;
  }
  