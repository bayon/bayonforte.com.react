import Paper from "@material-ui/core/Paper";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as authAction from "../../redux/actions/authAction";
import PlainCard from "../cards/PlainCard";

const SearchPage = (props) => {
  var auth = useSelector((state) => state.auth.authorized);
  var users = useSelector((state) => state.auth.users)
  var haveUsers = useSelector((state) => state.auth.haveUsers)
  const dispatch = useDispatch();

  console.log("Search Page reached ...props:", props);

  if(!auth){
    return(<div>not authorized.</div>)
  }
const getAllUsers = () => {
  dispatch(authAction.allUsers())
  .then(async (result) => {
    console.log("result:", result);
    
  })
  .catch((err) => console.log(err));
}

  return (
    <div>
      <Paper>
      <div>SearchPage</div>
      <div>List of All Records that Match Filter</div>
      <button onClick={getAllUsers}>do something Gomer</button>
      {haveUsers && 
     (  
       users.map( (user, i) => (
         
         <PlainCard user={user} ></PlainCard>
       )) 
     )
      
      }
        </Paper>
    </div>
  
  );
};

export default SearchPage;