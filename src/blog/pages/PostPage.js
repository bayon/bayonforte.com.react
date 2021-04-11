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
             USERS POST PAGE:
             *Make sure JUST the users Posts here, as opposed to all user posts.
            </li>
            <li>
              ACTIONS: 
              <ul>
                <li>Edit My Post Info: Delete , Make Inactive, etc...</li>
                <li>See 'live' version of my post.</li>
               
              </ul>
            </li>
            <li>
            ENTIRE SITE TODOS:
              <ul>
                <li>Edit and Delete 'My Posts'.</li>
                <li>Improve Search</li>
                <li>Finish Filters</li>
                <li>add website as profile and post info.</li>
                <li>Search By Distance from ZipCode.</li>
                <li>Map Locations</li>
                <li>Tie Payments to Post Creation.</li>
                <li>Tag other posts.</li>
                <li>correct image rotation from droid uploads.</li>
                <li>add 'time-posted field' to be able to search by 'latest' posts.</li>
                <li>inner messaging system for privacy concerned users.</li>
                <li>display 'my tagged posts' in dashboard. </li>
                <li>IF posts are to have a 'life time of a week' need way to track and check when no longer valid.</li>
                <li>keep old posts so they can be re-used </li>
                <li>make a subscription option, to make keeping posts up to date easier for the user.</li>
                <li>Make sure 'newly created posts' are displayed immediately.</li>
              </ul>
            </li>
          </ul>
        </div>
        
      
    </div>
  );
};

export default PostPage;
