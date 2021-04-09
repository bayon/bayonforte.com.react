import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as authAction from "../../redux/actions/authAction";
import ProfileCard from "../cards/ProfileCard";

const ProfilePage = (props) => {
  var auth = useSelector((state) => state.auth.authorized);
  const [user, setUser] = useState({});
  //var user = useSelector((state) => state.auth.user);
  //var haveUser = useSelector((state) => state.auth.haveUser);
  const dispatch = useDispatch();

  console.log("Search Page reached ...props:", props);
  useEffect(() => {
    dispatch(authAction.userProfile())
      .then(async (result) => {
        console.log("result:", result);
        setUser(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!auth) {
    return <div>not authorized.</div>;
  }
  const getUserProfile = () => {
    dispatch(authAction.userProfile())
      .then(async (result) => {
        console.log("result:", result);
        setUser(result.data);
      })
      .catch((err) => console.log(err));
  };

  

  return (
    <div>
      
        

        <ProfileCard user={user} refresh={getUserProfile}></ProfileCard>
        <div style={{ textAlign: "left" }}>
          <ul>
            <li>
              PERSONAL PROFILE
              <ul>
                <li>
                  a business card: name,phone,email,website, logo, zipcode,
                </li>
                <li>distance willing to travel</li>
                <li>activate/deactivate account</li>
                <li>
                  additional preferences: willing to join forces, cowboy
                  contractor only, etc....
                </li>
                <li>Type: Providing a Service, Hiring a Service.</li>
              </ul>
            </li>
            <li>
              ACTIONS: 
              <ul>
                <li>Edit My Profile Info</li>
                <li>Create a POST to go into the Search List </li>
                <li>Share Post on Facebook.</li>
                <li>Verify My Information.</li>
              </ul>
            </li>
          </ul>
        </div>
        
      
    </div>
  );
};

export default ProfilePage;

/*
import Paper from "@material-ui/core/Paper";
import React from "react";
import { useSelector } from "react-redux";

const ProfilePage = (props) => {
  var auth = useSelector((state) => state.auth.authorized);
  //console.log("Profile Page reached or what? props:", props);

 
  
  if(!auth){
    return(<div>not authorized.</div>)
  }

  return (
    <div>
      <Paper>      </Paper>

      <div>ProfilePage</div>
      <ul>
        <li>CRUD: a business card: name,phone,email,website, logo, zipcode, distance willing to travel,activate/deactivate.</li>
        <li>additional preferences: willing to join forces, cowboy contractor only, etc....</li>
        <li>Type: Providing a Service, Hiring a Service.</li>
      </ul>
    </div>
  );
};

export default ProfilePage;

*/
