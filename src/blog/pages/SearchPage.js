import Paper from "@material-ui/core/Paper";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as authAction from "../../redux/actions/authAction";
import PlainCard from "../cards/PlainCard";

const SearchPage = (props) => {
  var auth = useSelector((state) => state.auth.authorized);
  var users = useSelector((state) => state.auth.users);
  var haveUsers = useSelector((state) => state.auth.haveUsers);
  const dispatch = useDispatch();

  console.log("Search Page reached ...props:", props);
  useEffect( () => {
    dispatch(authAction.allUsers())
    .then(async (result) => {
      console.log("result:", result);
    })
    .catch((err) => console.log(err));
  },[])
  if (!auth) {
    return <div>not authorized.</div>;
  }
  const getAllUsers = () => {
    dispatch(authAction.allUsers())
      .then(async (result) => {
        console.log("result:", result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Paper>
        <div>Users List</div>
        <div >
          <ul>
            <li>
              DETAILS
              <ul>
                <li>See Contact Details and General Info of Individual Post</li>
                <li>Is the poster's info verified.</li>
                <li>Map of Posters location.</li>
                <li>Distance Poster is willing to travel.</li>
                <li>Image of Poster</li>
              </ul>
            </li>
            <li>
              ACTIONS: 
              <ul>
                <li>Send Poster a request to :
                  <ul>
                    <li>Get an Estimate</li>
                    <li>Collaborate on a job.</li>
                    <li>Leave comments on Experience or Service.</li>
                  </ul>
                </li>
                <li>Search and Filter the list </li>
                
              </ul>
            </li>
          </ul>
        </div>
        
        
        {haveUsers &&
          users.map((user, i) => <PlainCard user={user}></PlainCard>)}
      </Paper>
     
    </div>
  );
};

export default SearchPage;
