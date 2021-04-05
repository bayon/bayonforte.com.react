export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAIL = "REGISTER_USER_FAIL";

export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAIL = "LOGIN_USER_FAIL";

export const LOGOUT_USER_SUCCESS = "LOGOUT_USER_SUCCESS";
export const LOGOUT_USER_FAIL = "LOGOUT_USER_FAIL";

//
export const ALL_USERS_SUCCESS = "ALL_USERS_SUCCESS";
export const ALL_USERS_FAIL = "ALL_USERS_FAIL";

export const USER_PROFILE_SUCCESS = "USER_PROFILE_SUCCESS";
export const USER_PROFILE_FAIL = "USER_PROFILE_FAIL";

//const BASE_URL = "http://localhost:4000/api";
//OLD AND GONEconst BASE_URL = "https://nameless-refuge-42185.herokuapp.com";
const BASE_URL = "https://arcane-eyrie-05882.herokuapp.com/api"
export const registerUser = (authData) => {
  const { fullName, email, password } = authData;
  return async (dispatch) => {
    //benefit: can now make async http request to Register
    const result = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        email,
        password,
      }),
    });

    const resultData = await result.json();
    if (resultData.success){
        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: resultData,
          });
    } else {
        dispatch({
            type: REGISTER_USER_FAIL,
          });
    }
   
    return resultData;

  };
};
export const logoutUser = () => {
  //console.log("how the hell is that?")
  //console.log('dispatch:',dispatch)
  // dispatch({
  //   type: LOGOUT_USER_SUCCESS,
  // });
  return async (dispatch) => {
    dispatch({
        type: LOGOUT_USER_SUCCESS,
        })
  }
}

export const loginUser = (authData) => {
  const { email, password } = authData;
  return async (dispatch) => {
    //benefit: can now make async http request to Login
    const result = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
  
      const resultData = await result.json();
      if(resultData.success){
        dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: resultData,
          });
      } else {
        dispatch({
            type: LOGIN_USER_FAIL,
          });
      }
      return resultData; //Why?:  so that we have access to it in the dispatch to the action from loginScreen.
    //
    
  };
};


export const allUsers = () => {
  return async (dispatch) => {
    const result = await fetch(`${BASE_URL}/users/users`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
     
      });
  
      const resultData = await result.json();
      if(resultData){
        dispatch({
            type: ALL_USERS_SUCCESS,
            payload: resultData,
          });
      } else {
        dispatch({
            type: ALL_USERS_FAIL,
          });
      }
      return resultData;  
    
  };
};



export const userProfile = () => {
  return async (dispatch) => {
    const result = await fetch(`${BASE_URL}/users/profile`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('forteworksToken')
        },
     
      });
  
      const resultData = await result.json();
      if(resultData){
        dispatch({
            type: USER_PROFILE_SUCCESS,
            payload: resultData,
          });
      } else {
        dispatch({
            type: USER_PROFILE_FAIL,
          });
      }
      return resultData;  
    
  };
};