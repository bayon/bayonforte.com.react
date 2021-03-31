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

  //console.log("Search Page reached or what? props:", props);

  if(!auth){
    return(<div>not authorized.</div>)
  }
const getAllUsers = () => {
   dispatch(authAction.allUsers())
  .then(async (result) => {
    //console.log("result:", result);
    //we get the result here as well but we store it in the reducer...and retrieve it from state.
    
  })
  .catch((err) => console.log(err));
}


  const userDetails = (args) => {
    console.log('userDetails args:',args)
     
  }
//TODO: When 'user' clicks 'edit' need to redirect to a record specific page for CRUD operations.
  return (
    <div>
      <Paper>
      <div>SearchPage</div>
      <div>List of All Records that Match Filter</div>
      <button onClick={getAllUsers}>do something Gomer</button>
      {haveUsers && 
     (  
       users.map( (user, i) => (
         <PlainCard user={user} details={userDetails}></PlainCard>
       )) 
     )
      }
      
        </Paper>
    </div>
  
  );
};

export default SearchPage;