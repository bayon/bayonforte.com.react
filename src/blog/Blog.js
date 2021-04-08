import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as authAction from "./../redux/actions/authAction";
import logo from "./assets/img/pexels-pixabay-159201.jpg";
import BackendAnimatedCard from './cards/BackendAnimatedCard';
import DatabaseAnimatedCard from './cards/DatabaseAnimatedCard';
import FrontEndAnimatedCard from './cards/FrontEndAnimatedCard';
import Footer from "./Footer";

 


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
 

 

export default function Blog(props) {
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
  return (
     <React.Fragment>
    
      
        
        
          {/* <MainFeaturedPost post={mainFeaturedPost} /> */}
          <Grid container  >
           
          <Grid item xs={12} sm={12}>
          {/* <MainFeaturedPost post={mainFeaturedPost} /> */}
          <Paper
          
          style={{
            backgroundImage: `url(${logo})`,
             backgroundSize: "cover",
            height: "400px",
          }}
        >
          </Paper>
            </Grid>            
            <Grid item xs={12} sm={4}>
              <FrontEndAnimatedCard></FrontEndAnimatedCard>
            </Grid>

            <Grid item xs={12} sm={4}>
              <DatabaseAnimatedCard></DatabaseAnimatedCard>
            </Grid>
            <Grid item xs={12} sm={4}>
              <BackendAnimatedCard></BackendAnimatedCard>
            </Grid>
          </Grid>
          {/* <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid> */}
        
       
      <Footer title="Footer" description="Now you know too much!" />
    </React.Fragment>
  );
}
