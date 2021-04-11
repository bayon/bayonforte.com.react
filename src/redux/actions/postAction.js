import { config } from '../../Constants';

//
export const ALL_POSTS_SUCCESS = "ALL_POSTS_SUCCESS";
export const ALL_POSTS_FAIL = "ALL_POSTS_FAIL";

export const POST_GET_SUCCESS = "POST_GET_SUCCESS";
export const POST_GET_FAIL = "POST_GET_FAIL";

export const UPDATE_POST_SUCCESS = "UPDATE_POST_SUCCESS";
export const UPDATE_POST_FAIL = "UPDATE_POST_FAIL";

export const FILTER_POSTS_SUCCESS = "FILTER_POSTS_SUCCESS";
export const FILTER_POSTS_FAIL = "FILTER_POSTS_FAIL";

export const CREATE_POST_SUCCESS = "CREATE_POST_SUCCESS";
export const CREATE_POST_FAIL = "CREATE_POST_FAIL";

const API_URL = config.url.API_URL
 

export const allPosts = () => {
  return async (dispatch) => {
    const result = await fetch(`${API_URL}/posts/posts`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
     
      });
  
      const resultData = await result.json();
      if(resultData){
        dispatch({
            type: ALL_POSTS_SUCCESS,
            payload: resultData,
            
          });
      } else {
        dispatch({
            type: ALL_POSTS_FAIL,
          });
      }
      return resultData;  
    
  };
};

export const createPost = (postData) => {

console.log("CREATE POST ACTION: postData:",postData)

    const { userId,title, description, category,email ,phone , address, city, state, zip, postImage } = postData;
    return async (dispatch) => {
      const result = await fetch(`${API_URL}/posts/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          title,
          description,
          category,
          email,
          phone,
          address,
          city,
          state,
          zip,
          postImage
          
        }),
      });
  
      const resultData = await result.json();
      if (resultData.success){
          dispatch({
              type: CREATE_POST_SUCCESS,
              payload: resultData,
            });
      } else {
          dispatch({
              type: CREATE_POST_FAIL,
            });
      }
     
      return resultData;
  
    };
  };

export const getPost = () => {
  return async (dispatch) => {
    const result = await fetch(`${API_URL}/posts/post`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('forteworksToken')
        },
     
      });
  
      const resultData = await result.json();
      if(resultData){
        dispatch({
            type: POST_GET_SUCCESS,
            payload: resultData,
          });
      } else {
        dispatch({
            type: POST_GET_FAIL,
          });
      }
      return resultData;  
    
  };
};


export const updatePost = (postData) => {
  const { fullName, email, phone , postImage, address, city, state, zip } = postData;
  return async (dispatch) => {
    const result = await fetch(`${API_URL}/posts/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        email,
        phone,
        postImage,
        address,
        city,
        state,
        zip
      }),
    });

    const resultData = await result.json();
    if (resultData.success){
        dispatch({
            type: UPDATE_POST_SUCCESS,
            payload: resultData,
          });
    } else {
        dispatch({
            type: UPDATE_POST_FAIL,
          });
    }
   
    return resultData;

  };
};

// filter 
export const filterPosts = (key) => {
  console.log('filter key is ...',key)
  return async (dispatch) => {
    
    const result = await fetch(`${API_URL}/posts/filter`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          key,
        }),
      });
  
      const resultData = await result.json();
      if(resultData.success){
        dispatch({
            type: FILTER_POSTS_SUCCESS,
            payload: resultData,
          });
      } else {
        dispatch({
            type: FILTER_POSTS_FAIL,
          });
      }
      return resultData;  
    
  };
   


};