 import {
  ALL_SITE_POSTS_FAIL, ALL_SITE_POSTS_SUCCESS, ALL_USER_POSTS_FAIL, ALL_USER_POSTS_SUCCESS, CREATE_POST_FAIL, CREATE_POST_SUCCESS,

  DELETE_POST_FAIL, DELETE_POST_SUCCESS, FILTER_OWNERS_POSTS_FAIL, FILTER_OWNERS_POSTS_SUCCESS, FILTER_POSTS_FAIL, FILTER_POSTS_SUCCESS, GET_STATUS_COLOR, SET_STATUS_BLUE,
  SET_STATUS_GREEN, UPDATE_POST_FAIL, UPDATE_POST_SUCCESS
} from "../actions/postAction";
 


const initialState = {
  havePosts: false,
  posts: [],
  post: {},
  usersPosts: [],
  haveUsersPosts: false,
  errors: {},
  newPost: false,
  statusColor:'undefined',
  categories: ["construction","remodeling","plumbing","painting","carpentry","siding","drywall","concrete","frameing","cabinetry","tile","decks","landscaping"]
};
//!!!!: The order of there 'categories' is important !!!
 


export default function (state = initialState, action) {
  switch (action.type) {
    case ALL_USER_POSTS_SUCCESS:
      return {
        ...state,
        usersPosts: action.payload,
        haveUsersPosts: true,
      };
    case ALL_USER_POSTS_FAIL:
      return {
        ...state,
        errors: true,
      };
    case ALL_SITE_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        havePosts: true,
      };
    case ALL_SITE_POSTS_FAIL:
      return {
        ...state,
        errors: true,
      };
    case CREATE_POST_SUCCESS:
     
      return {
        ...state,
        post: action.payload,
        newPost: true,
        statusColor: "BLUE"
       };
    case CREATE_POST_FAIL:
      return {
        ...state,
        errors: true,
      };
    case UPDATE_POST_SUCCESS:
      return {
        ...state,
        post: action.payload,
        statusColor:'BLUE'
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
      case FILTER_OWNERS_POSTS_SUCCESS:
        return {
          ...state,
          usersPosts: action.payload,
          haveUsersPosts: true,
        };
      case FILTER_OWNERS_POSTS_FAIL:
        return {
          ...state,
          errors: true,
        };
        case DELETE_POST_SUCCESS:
     
          return {
            ...state,
            post: action.payload,
            statusColor: "RED"
           };
        case DELETE_POST_FAIL:
          return {
            ...state,
            errors: true,
          };
        //===================
        case SET_STATUS_BLUE: 
        return {
          ...state, 
          statusColor:'BLUE'
        }
      case SET_STATUS_GREEN: 
        return {
          ...state, 
          statusColor:'GREEN'
        }
      case GET_STATUS_COLOR: 
        return {
          ...state,
        }
    default:
      break;
  }
  return state;
}
