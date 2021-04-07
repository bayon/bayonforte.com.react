import {
  ALL_USERS_FAIL,
  ALL_USERS_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,

  UPDATE_USER_FAIL, UPDATE_USER_SUCCESS,

  USER_PROFILE_FAIL,
  USER_PROFILE_SUCCESS
} from "../actions/authAction";

const initialState = {
  authorized: false,
  haveUsers: false,
  users: [],
  user: {},
  errors: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        users: action.payload,
        authorized: true,
      };
      break;
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        authorized: true,
      };
      break;
    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        authorized: false,
      };
      break;
    case ALL_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        haveUsers: true,
      };
      break;
    case USER_PROFILE_SUCCESS:
      return {
        ...state,
        user: action.payload,
        haveUser: true,
      };
      break;
    case LOGIN_USER_FAIL:
      return {
        ...state,
        errors: true,
      };
      break;
    case REGISTER_USER_FAIL:
      return {
        ...state,
        errors: true,
      };
      break;
    case ALL_USERS_FAIL:
      return {
        ...state,
        errors: true,
      };
      break;
    case USER_PROFILE_FAIL:
      return {
        ...state,
        errors: true,
      };
      break;

    case UPDATE_USER_SUCCESS:
        return {
          ...state,
          user: action.payload,
        };
        break;
    case UPDATE_USER_FAIL:
          return {
            ...state,
            errors: true,
          };
          break;
    default:
      break;
  }
  return state;
}
