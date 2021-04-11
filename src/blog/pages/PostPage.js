import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as postAction from "../../redux/actions/postAction";
import PostCard from "../cards/PostCard";

const PostPage = (props) => {
  var auth = useSelector((state) => state.auth.authorized);
  const [post, setPost] = useState({});
  const dispatch = useDispatch();

   useEffect(() => {
    dispatch(postAction.getPost())
      .then(async (result) => {
        console.log("result:", result);
        setPost(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!auth) {
    return <div>not authorized.</div>;
  }
  const getPosts = () => {
    dispatch(postAction.getPost())
      .then(async (result) => {
        console.log("result:", result);
        setPost(result.data);
      })
      .catch((err) => console.log(err));
  };

  

  return (
    <div>        
        <PostCard post={post} refresh={getPosts}></PostCard>
        <div style={{ textAlign: "left" }}>
          <ul>
            <li>
             Users Post Page
             *Make sure JUST the users Posts here, as opposed to all user posts.
            </li>
            <li>
              ACTIONS: 
              <ul>
                <li>Edit My Post Info: Delete , Make Inactive, etc...</li>
                <li>See 'live' version of my post.</li>
               
              </ul>
            </li>
          </ul>
        </div>
        
      
    </div>
  );
};

export default PostPage;