import Paper from "@material-ui/core/Paper";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as authAction from "../../redux/actions/authAction";


const SearchPage = (props) => {
  var auth = useSelector((state) => state.auth.authorized);
  const dispatch = useDispatch();

  console.log("Search Page reached or what? props:", props);

  if(!auth){
    return(<div>not authorized.</div>)
  }
const doSomething = () => {
  console.log('well goooollly!')
  dispatch(authAction.userProfile())
  .then(async (result) => {
    console.log("result:", result);
     
    if (result.success) {
      //setInProgress(true);
      //setLoading(false)
      console.log('result success..')
    }
  })
  .catch((err) => console.log(err));
}

  return (
    <div>
      <Paper></Paper>
      <div>SearchPage</div>
      <div>List of All Records that Match Filter</div>
      <button onClick={doSomething}>do something Gomer</button>
    </div>
  );
};

export default SearchPage;


/*
Need something like this BUT with the users/profiles endpoint on the heroku api side ... 

from index.js on API
app.get('/api/users/profile', verifyToken, (req,res) => {
    //console.log(req.user)//because it got added in the 'verifyToken' middleware...
    //res.send('This is the PROTECTED user profile')
    res.send({success:true,data: req.user })
})


from Login.js Page 
  onSubmit={(values) => {
                    console.log("values:", values);
                    setInProgress(true);
                    setLoading(true);
                    dispatch(authAction.loginUser(values))
                      .then(async (result) => {
                        console.log("result:", result);
                        localStorage.setItem("forteworksToken", result.token);
                        setTimeout(() => setLoading(false), 3000);
                        if (result.success) {
                          setInProgress(true);
                          //setLoading(false)
                        }
                      })
                      .catch((err) => console.log(err));
                  }}
                  */

// ! DISPATCH ACTION is locatedd in redux...auth actions. 
// ! reducer just deciding which action to be taken. 


// dependencies we need to import: 