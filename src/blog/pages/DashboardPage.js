import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
//import Footer from "../Footer";
import Toolbar from "@material-ui/core/Toolbar";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as authAction from "../../redux/actions/authAction";
import AudioMaster from "../components/AudioNote/AudioMaster";
// import CreatePost from "../components/CreatePost/CreatePost";
import PostPage from "./PostPage";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));
 

 

export default function DashboardPage(props) {
  const classes = useStyles();
  var auth = useSelector((state) => state.auth.authorized);
  const [user, setUser] = useState({});

  const dispatch = useDispatch();

  console.log("Search Page reached ...props:", props);
  useEffect(() => {
    dispatch(authAction.userProfile())
      .then(async (result) => {
        console.log("result:", result);
        setUser(result.data);
      })
      .catch((err) => console.log(err));
  }, [auth]);
  
  //sections={sections}
  if (!auth) {
    return <div>not authorized.</div>;
  }
  return (
     <React.Fragment>
    
      
        
        
          {/* <MainFeaturedPost post={mainFeaturedPost} /> */}
          <Toolbar>
          <Grid container className={classes.mainGrid} >
            { auth && 
              <p>Hello, {user.fullName}</p>
            }
          </Grid>

          </Toolbar>
          <Grid container className={classes.mainGrid} >
             
            <Grid item xs={12}>
                <h1>Dashboard</h1>
            </Grid>
            <Grid item xs={12}>
              <PostPage></PostPage>
              {/* <CreatePost></CreatePost> */}
            </Grid>
            <Grid>
              <p>create audio note:</p>
              <AudioMaster></AudioMaster>
            </Grid>
          </Grid>
          
        
       
      {/* <Footer title="Footer" description="Now you know too much!" /> */}
    </React.Fragment>
  );
}
