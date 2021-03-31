import { Grid } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
//import store from "./redux/store";
import { useDispatch, useSelector } from "react-redux";
//import { Provider } from "react-redux";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./App.css";
//import logo from "./blog/assets/img/blue-cottage-840-464-widened-to-1024.png";
import Blog from "./blog/Blog";
import LoginPage from "./blog/pages/LoginPage";
import ProfilePage from "./blog/pages/ProfilePage";
import RegisterPage from "./blog/pages/RegisterPage";
import SearchPage from "./blog/pages/SearchPage";
import * as authAction from "./redux/actions/authAction";


const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

function Navigation(props) {
  var auth = useSelector((state) => state.auth.authorized);
  const classes = useStyles();
  console.log("auth is:", auth);
  const dispatch = useDispatch();
  //const [inProgress, setInProgress] = useState(false);

  //   const hasToken = localStorage.getItem("forteworksToken");
  //   console.log("hasToken:", hasToken);
  //   var isAuth = false;
  //   if (hasToken != "") {
  //     isAuth = true;
  //   }

  return (
    <Router>
      <Toolbar className={classes.toolbar}>
        <Grid container>
          
          <Grid item xs={12} sm={3}>
            <Typography
              component="h5"
              variant="h5"
              color="inherit"
              align="center"
              noWrap
              className={classes.toolbarTitle}
            >
              Forteworks...
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <div style={{ marginRight: 15 }}>
              <a
                href="tel:8122670592"
                style={{ color: "#222", textDecoration: "none" }}
              >
                (812) 267-0592<Icon>phone</Icon>
              </a>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div style={{ listStyle: "none", display: "inline" }}>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "#333",
                  padding: "15px",
                  margin: "15px",
                }}
              >
                home
              </Link>
              {auth &&
              <>
                 <Link
                 to="/profile"
                 style={{
                   textDecoration: "none",
                   color: "#333",
                   padding: "15px",
                   margin: "15px",
                 }}
               >
                 Profile
               </Link>

              <Link
              to="/search"
              style={{
                textDecoration: "none",
                color: "#333",
                padding: "15px",
                margin: "15px",
              }}
              >
              Search
              </Link>
              </>
                }


              {!auth ? (
                <>
                <Link
                  to="/login"
                  style={{
                    textDecoration: "none",
                    color: "#333",
                    padding: "15px",
                    margin: "15px",
                  }}
                >
                  login
                </Link>
                 <Link
                 to="/register"
                 style={{
                   textDecoration: "none",
                   color: "#333",
                   padding: "15px",
                   margin: "15px",
                 }}
               >
                 register
               </Link>
               </>
              ) : (
                <Link
                  to="/logout"
                  onClick={() => {
                    // console.log("values:", values);
                    // setInProgress(true);
                    dispatch(authAction.logoutUser())
                      .then(async (result) => {
                        console.log("result:", result);
                        localStorage.removeItem("forteworksToken");

                        // if (result.success) {
                        //   setInProgress(true);
                        // }
                      })
                      .catch((err) => console.log(err));
                  }}
                  style={{
                    textDecoration: "none",
                    color: "#333",
                    padding: "15px",
                    margin: "15px",
                  }}
                >
                  log out
                </Link>
              )}
            </div>
            
          </Grid>
        </Grid>
      </Toolbar>

      <Route exact path="/" component={Blog} />
      <Route exact path="/build" component={Blog} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/search" component={SearchPage} />
      <Route path="/logout" component={Blog} />
    </Router>
  );
}

export default Navigation;
