import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
/////
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
//import store from "./redux/store";
import { useDispatch, useSelector } from "react-redux";
//import { Provider } from "react-redux";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./App.css";
//import logo from "./blog/assets/img/blue-cottage-840-464-widened-to-1024.png";
import Blog from "./blog/Blog";
import DashboardPage from "./blog/pages/DashboardPage";
import LoginPage from "./blog/pages/LoginPage";
import ProfilePage from "./blog/pages/ProfilePage";
import RegisterPage from "./blog/pages/RegisterPage";
import SearchPage from "./blog/pages/SearchPage";
import "./navigation.css";
import * as authAction from "./redux/actions/authAction";



// const useStyles = makeStyles((theme) => ({
//   toolbar: {
//     borderBottom: `1px solid ${theme.palette.divider}`,
//   },
//   toolbarTitle: {
//     flex: 1,
//   },
//   toolbarSecondary: {
//     justifyContent: "space-between",
//     overflowX: "auto",
//   },
//   toolbarLink: {
//     padding: theme.spacing(1),
//     flexShrink: 0,

//   },
//   anchors:{
//     // "@media (max-width: 900px)": {
//       color:"red",
//     // },
//   }
// }));

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  link: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function Navigation(props) {
  var auth = useSelector((state) => state.auth.authorized);
  console.log("initial auth is:", auth);
  const [user, setUser] = useState({});

  const classes = useStyles();

  //GOES FALSE AFTER REFRESH: IS THAT DESIRED ? 
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authAction.userProfile())
      .then(async (result) => {
        console.log("AUTH CHECK: profile to check auth ...result:", result);
        setUser(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Router>
      <Toolbar
      // className={classes.toolbar}
      >
        <Grid container spacing={1}>
        <Grid item xs={12} sm={3}>
          <Typography
            component="h6"
            variant="h6"
            color="inherit"
            align="center"
            noWrap
            // className={classes.toolbarTitle}
          >
            Full Stack Development
          </Typography>
          </Grid>
          <Grid item xs={12} sm={2}>
          <div style={{ marginRight: 15 }}>
            <a
              href="tel:8122670592"
              style={{ color: "#333", margin: "15px", textDecoration: "none" ,fontSize:".8em"}}
            >
              (812) 267-0592
              <Icon
                style={{ color: "#333", marginLeft: "5px", textDecoration: "none" ,fontSize:"1em"}}
              >
                phone
              </Icon>
            </a>
           
          </div>
          </Grid>
          <Grid item xs={12} sm={1}>
          <Link
            style={{ color: "#333", margin: "15px", textDecoration: "none" }}
            className={classes.link}
            to="/"
          >
            Home
          </Link>
          </Grid>

          {auth && (
            <>
             <Grid item xs={12} sm={1}>
              <Link
                style={{
                  color: "#333",
                  margin: "15px",
                  textDecoration: "none",
                }}
                className={classes.link}
                to="/dashboard"
              >
                Dashboard
              </Link>
              </Grid>
               <Grid item xs={12} sm={1}>
              <Link
                style={{
                  color: "#333",
                  margin: "15px",
                  textDecoration: "none",
                }}
                className={classes.link}
                to="/profile"
              >
                Profile
              </Link>
              </Grid>
              <Grid item xs={12} sm={1}>
              <Link
                style={{
                  color: "#333",
                  margin: "15px",
                  textDecoration: "none",
                }}
                className={classes.link}
                to="/search"
              >
                Search
              </Link>
              </Grid>
            </>
          )}

          {!auth ? (
            <>
             <Grid item xs={12} sm={1}>
              <Link
                style={{
                  color: "#333",
                  margin: "15px",
                  textDecoration: "none",
                }}
                className={classes.link}
                to="/login"
              >
                Login
              </Link>
              </Grid> 
              <Grid item xs={12} sm={1}>
              <Link
                style={{
                  color: "#333",
                  margin: "15px",
                  textDecoration: "none",
                }}
                className={classes.link}
                to="/register"
              >
                Register
              </Link>
              </Grid>
            </>
          ) : (
            <Grid item xs={12} sm={1}>
            <Link
              style={{ color: "#333", margin: "15px", textDecoration: "none" }}
              className={classes.link}
              to="/logout"
              onClick={() => {
                dispatch(authAction.logoutUser())
                  .then(async (result) => {
                    console.log("result:", result);
                    localStorage.removeItem("forteworksToken");
                  })
                  .catch((err) => console.log(err));
              }}
            >
              Logout
            </Link>
            
            </Grid>
          )}
        </Grid>
      </Toolbar>

      <Route exact path="/" component={Blog} />
      <Route exact path="/build" component={Blog} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/dashboard" component={DashboardPage} />

      <Route path="/profile" component={ProfilePage} />
      <Route path="/search" component={SearchPage} />
      <Route path="/logout" component={Blog} />
    </Router>
  );
}

export default Navigation;
