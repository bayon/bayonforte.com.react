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
              <p className="cardDevNote" >PostCreatePage</p>
  
        <PostCreateCard post={post} refresh={getPosts}></PostCreateCard>
        <div style={{ textAlign: "left" }}>

          <ul>
            <li>
             USERS POST PAGE:
             </li>
          
            <li>
            ENTIRE SITE TODOS:
              <ul>
                db:<ul>

                <li>add category back for work industry type.</li>
                <li>add website as profile and post info.</li>
                <li>add 'time-posted field' to be able to search by 'latest' posts.</li>

                </ul>
                ui:
                <ul>
                 

                <li>Finish Filters<ul><li>by latest</li><li>by postType</li><li>etc.</li></ul></li>
                </ul>
                api:
                <ul>
                  

                <li>Search By Distance from ZipCode.</li>

                <li>Tie Payments to Post Creation.</li>
                <li>Map Locations</li>


                </ul>
                other:
                <ul>
                 

                <li>Tag other posts.</li>
                <li>correct image rotation from droid uploads.</li>
                <li>inner messaging system for privacy concerned users.</li>
                <li>display 'my tagged posts' in dashboard. </li>
                <li>IF posts are to have a 'life time of a week' need way to track and check when no longer valid.</li>
                <li>keep old posts so they can be re-used </li>
                <li>make a subscription option, to make keeping posts up to date easier for the user.</li>
                </ul>
                
                
              </ul>
            </li>
          </ul>
        </div>
        
      
    </div>
  );
};

export default PostCreatePage;
