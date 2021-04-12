import { config } from '../../Constants';

//
export const ALL_USER_POSTS_SUCCESS = "ALL_USER_POSTS_SUCCESS";
export const ALL_USER_POSTS_FAIL = "ALL_USER_POSTS_FAIL";

export const ALL_SITE_POSTS_SUCCESS = "ALL_SITE_POSTS_SUCCESS";
export const ALL_SITE_POSTS_FAIL = "ALL_SITE_POSTS_FAIL";

export const POST_GET_SUCCESS = "POST_GET_SUCCESS";
export const POST_GET_FAIL = "POST_GET_FAIL";

export const UPDATE_POST_SUCCESS = "UPDATE_POST_SUCCESS";
export const UPDATE_POST_FAIL = "UPDATE_POST_FAIL";

export const FILTER_POSTS_SUCCESS = "FILTER_POSTS_SUCCESS";
export const FILTER_POSTS_FAIL = "FILTER_POSTS_FAIL";

export const CREATE_POST_SUCCESS = "CREATE_POST_SUCCESS";
export const CREATE_POST_FAIL = "CREATE_POST_FAIL";

const API_URL = config.url.API_URL
 



export const allSitePosts = () => {
  return async (dispatch) => {
    const result = await fetch(`${API_URL}/posts/site/posts`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
     
      });
  
      const resultData = await result.json();
      if(resultData){
        dispatch({
            type: ALL_SITE_POSTS_SUCCESS,
            payload: resultData,
            
          });
      } else {
        dispatch({
            type: ALL_SITE_POSTS_FAIL,
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
  console.log('POST ACTION UPDATE POST: postData:',postData)
  const {  postId,userId,title, description, category,email ,phone , address, city, state, zip, postImage} = postData;
  //post versus posts in URL 
  return async (dispatch) => {
    const result = await fetch(`${API_URL}/posts/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        postId,
        userId,
        title, 
        description, 
        category,
        email ,
        phone ,
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

// filter : FILTERS ALL POSTS:
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

// NEED FILTER FOR JUST USERS POST TOO. 
// LEFT OFF HERE 

export const allUserPosts = (key) => {
  return async (dispatch) => {
    
    const result = await fetch(`${API_URL}/posts/user/posts`, {
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
            type: ALL_USER_POSTS_SUCCESS,
            payload: resultData,
          });
      } else {
        dispatch({
            type: ALL_USER_POSTS_FAIL,
          });
      }
      return resultData;  
    
  };
  // return async (dispatch) => {
  //   const result = await fetch(`${API_URL}/posts/user/posts`, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
     
  //     });
  
  //     const resultData = await result.json();
  //     if(resultData){
  //       dispatch({
  //           type: ALL_USER_POSTS_SUCCESS,
  //           payload: resultData,
            
  //         });
  //     } else {
  //       dispatch({
  //           type: ALL_USER_POSTS_FAIL,
  //         });
  //     }
  //     return resultData;  
    
  // };
};