import {
  ALL_USERS_FAIL,
  ALL_USERS_SUCCESS,
  FILTER_USERS_FAIL,
  FILTER_USERS_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,
  UPDATE_USER_FAIL,
  UPDATE_USER_SUCCESS,
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
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        authorized: true,
      };
    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        authorized: false,
      };
    case ALL_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        haveUsers: true,
      };
    case ALL_USERS_FAIL:
      return {
        ...state,
        errors: true,
      };
    case USER_PROFILE_SUCCESS:
      return {
        ...state,
        user: action.payload,
        haveUser: true,
        authorized: true,
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        errors: true,
      };
    case REGISTER_USER_FAIL:
      return {
        ...state,
        errors: true,
      };

    case USER_PROFILE_FAIL:
      return {
        ...state,
        errors: true,
      };

    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case UPDATE_USER_FAIL:
      return {
        ...state,
        errors: true,
      };
    case FILTER_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        haveUsers: true,
      };
    case FILTER_USERS_FAIL:
      return {
        ...state,
        errors: true,
      };

    default:
      break;
  }
  return state;
}
