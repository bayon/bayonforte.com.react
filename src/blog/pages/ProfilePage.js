import Paper from "@material-ui/core/Paper";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as authAction from "../../redux/actions/authAction";
import PlainCard from "../cards/PlainCard";

const ProfilePage = (props) => {
  var auth = useSelector((state) => state.auth.authorized);
  const [ user, setUser] = useState({})
  //var user = useSelector((state) => state.auth.user);
  //var haveUser = useSelector((state) => state.auth.haveUser);
  const dispatch = useDispatch();

  console.log("Search Page reached ...props:", props);
  useEffect( () => {
    dispatch(authAction.userProfile())
    .then(async (result) => {
      console.log("result:", result);
      setUser(result.data)
    })
    .catch((err) => console.log(err));
  },[])

  if (!auth) {
    return <div>not authorized.</div>;
  }
  const getUserProfile = () => {
    dispatch(authAction.userProfile())
      .then(async (result) => {
        console.log("result:", result);
        setUser(result.data)
      })
      .catch((err) => console.log(err));
  };



  return (
    <div>
      <Paper>
        <div>ProfilePage</div>
        <div>List of All Records that Match Filter</div>
        <button onClick={getUserProfile}>Get User Profile</button>
        <PlainCard user={user}></PlainCard>
        <ul>
        <li>CRUD: a business card: name,phone,email,website, logo, zipcode, distance willing to travel,activate/deactivate.</li>
        <li>additional preferences: willing to join forces, cowboy contractor only, etc....</li>
        <li>Type: Providing a Service, Hiring a Service.</li>
        </ul>
      </Paper>
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