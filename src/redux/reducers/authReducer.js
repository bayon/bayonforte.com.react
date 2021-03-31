import { ALL_USERS_FAIL, ALL_USERS_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER_SUCCESS, LOGOUT_USER_SUCCESS, REGISTER_USER_FAIL, REGISTER_USER_SUCCESS } from "../actions/authAction";

const initialState = {
  authorized:false,
  haveUsers:false,
  users:[],
  user: {},
  errors: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        users: action.payload,
        authorized: true
      };
      break;
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        authorized: true
      };
      break;
    case LOGOUT_USER_SUCCESS:
        return {
          ...state,
          authorized: false
        };
        break;
    case ALL_USERS_SUCCESS:
          return {
            ...state,
            users: action.payload,
            haveUsers: true
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
    default:
      break;
  }
  return state;
}
