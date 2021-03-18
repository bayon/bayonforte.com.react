import Paper from "@material-ui/core/Paper";
import React from "react";
import { useSelector } from "react-redux";

const ProfilePage = (props) => {
  var auth = useSelector((state) => state.auth.authorized);
  //console.log("Profile Page reached or what? props:", props);

  //PSUEDO CODE: 
  //state: hasProfile = true or false 
  // IF hasProfile, display profile. 
      //EDIT: button with UI for UPDATING and DELETEING . 
  // ELSE display FORM to create Profile. 
      // all parameters and image for logo. 
      //share geolocation ? zip code. 
  
  if(!auth){
    return(<div>not authorized.</div>)
  }

  return (
    <div>
      <Paper></Paper>
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

