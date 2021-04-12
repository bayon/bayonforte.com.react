import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as postAction from "../../redux/actions/postAction";
import PostCreateCard from "../cards/PostCreateCard";

const PostCreatePage = (props) => {
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
        <PostCreateCard post={post} refresh={getPosts}></PostCreateCard>
        <div style={{ textAlign: "left" }}>
          <ul>
            <li>
             USERS POST PAGE:
             </li>
            <li>
              ACTIONS: 
              <ul>
                <li>Edit My Post Info: Delete , Make Inactive, etc...</li>
                
              </ul>
            </li>
            <li>
            ENTIRE SITE TODOS:
              <ul>
                <li>Edit and Delete 'My Posts'.</li>
                <li>Make Sure ALL data changes update immediately.
                  <ul>
                    <li>ie. My Posts: editing updates ONLY AFTER leave and return.</li>
                    <li>Make sure 'newly created posts' are displayed immediately.</li>
                  </ul>
                </li>
                <li>switch out 'category' with 'postType',use category for industry vertical.</li>
                <li>Finish Filters<ul><li>by latest</li><li>by category</li><li>etc.</li></ul></li>
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
                
              </ul>
            </li>
          </ul>
        </div>
        
      
    </div>
  );
};

export default PostCreatePage;
