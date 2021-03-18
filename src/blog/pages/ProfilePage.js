import React from "react";
import { useSelector } from "react-redux";

const ProfilePage = (props) => {
  var auth = useSelector((state) => state.auth.authorized);

  console.log("Profile Page reached or what? props:", props);

  if(!auth){
    return(<div>not authorized.</div>)
  }

  return (
    <div>
      <div>ProfilePage</div>
    </div>
  );
};

export default ProfilePage;
