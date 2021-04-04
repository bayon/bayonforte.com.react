import Icon from "@material-ui/core/Icon";
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

function Navigation(props) {
  var auth = useSelector((state) => state.auth.authorized);
  // const classes = useStyles();
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
      <Toolbar
      // className={classes.toolbar}
      >
        <Typography
          component="h5"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          // className={classes.toolbarTitle}
        >
          Full Stack Development
        </Typography>

        <div style={{ marginRight: 15 }}>
          <a href="tel:8122670592" style={{ color: "#333", margin: "15px", textDecoration: "none" }}>
            (812) 267-0592<Icon style={{ color: "#333", margin: "0px", textDecoration: "none" }}>phone</Icon>
          </a>
        </div>

        <Link
          style={{ color: "#333", margin: "15px", textDecoration: "none" }}
          to="/"
          
        >
          Home
        </Link>

        {auth && (
          <>
            <Link
              style={{ color: "#333", margin: "15px", textDecoration: "none" }}
              to="/profile"
              
            >
              Profile
            </Link>

            {/* 
                   
                   TODO: Not Built into the API yet.
                   <Link
                   style={{color:"#333",margin:"15px",textDecoration:"none"}}
                    to="/search"
                    
                    
                  >
                    Search
                  </Link> */}
          </>
        )}

        {!auth ? (
          <>
            <Link
              style={{ color: "#333", margin: "15px", textDecoration: "none" }}
              to="/login"
              
            >
              Login
            </Link>
            <Link
              style={{ color: "#333", margin: "15px", textDecoration: "none" }}
              to="/register"
              
            >
              Register
            </Link>
          </>
        ) : (
          <Link
            style={{ color: "#333", margin: "15px", textDecoration: "none" }}
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
            Log out
          </Link>
        )}
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
