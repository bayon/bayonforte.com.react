
import { Grid } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./App.css";
//import logo from "./blog/assets/img/blue-cottage-840-464-widened-to-1024.png";
import Blog from "./blog/Blog";
import LoginPage from "./blog/pages/LoginPage";
import store from "./redux/store";

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

function App(props) {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Toolbar className={classes.toolbar}>
            <Grid container>
              <Grid item xs={12} sm={2}>
                {/* <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${logo})` , backgroundSize:'cover', height:'100px'}}> */}
                {/* <img src={`${logo}`} style={{ height: "100px" }} /> */}
                {/* </Paper> */}
              </Grid>
              <Grid item xs={12} sm={4}>
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
                {/* <IconButton>
          <SearchIcon />
        </IconButton> */}
              </Grid>
              <Grid item xs={12} sm={3}>
                {/* <Button
                variant="outlined"
                size="small"
                onClick={() => {
                  alert(
                    "Coming soon. Just need to install redux and build the ui."
                  );
                }}
              >
                Login
              </Button> */}
                <div style={{ listStyle: "none", display: "inline" }}>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "#333" ,padding:"15px",margin:"15px"}}
                  >
                    home
                  </Link>
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", color: "#333",padding:"15px",margin:"15px" }}
                  >
                    login
                  </Link>
                  
                </div>
              </Grid>
            </Grid>
          </Toolbar>

          <Route exact path="/" component={Blog} />
          <Route exact path="/build" component={Blog} />
          <Route path="/login" component={LoginPage} />
        </Router>
      </div>
    </Provider>
  );
}

// Header.propTypes = {
//   sections: PropTypes.array,
//   title: PropTypes.string,
// };



export default App;


// import './App.css';
// import Blog from './blog/Blog';

// function App() {
//   return (
//     <div className="App">
//        <Blog></Blog>
//     </div>
//   );
// }

// export default App;
