import { Card, CircularProgress, Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
//FORM AND REDUX part 1: in header
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux"; //useSelector?
//KEEP:
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import * as yup from "yup";
import * as authAction from "../../redux/actions/authAction";
///
import ProfilePage from "./ProfilePage";
import SearchPage from "./SearchPage";

//


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

// import Icon from "@material-ui/core/Icon";
// import { makeStyles } from "@material-ui/core/styles";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";

const formSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
});
//end  part 1

// const useStyles = makeStyles(styles);

function ButtonComponent(props) {
  const { onClick, loading } = props;
  return (
    <Button variant="contained" onClick={onClick} disabled={loading}>
      {loading && <CircularProgress size={14} />}
      {!loading && 'Click Me'}
    </Button>
  );
}


export default function LoginPage(props) {
  // const classes = useStyles();
  const [loading,setLoading] = useState(false)
  const onClick = () => {
    setLoading(true)
    setTimeout(() =>  setLoading(false), 3000); //3 seconds
  };

  
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;

  //FORM AND REDUX  part 2: default export function
  const dispatch = useDispatch();
  const [inProgress, setInProgress] = useState(false);
  console.log("inProgress:", inProgress);
  useEffect(() => {
    setInProgress(inProgress);
  }, [inProgress]);
  //end  part 2
  if (!inProgress) {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <div>
            <div justify="center">
              <div xs={12} sm={12} md={4}>
                {/* //FORM AND REDUX  part 3 JSX*/}
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                  validationSchema={formSchema}
                  onSubmit={(values) => {
                    console.log("values:", values);
                    setInProgress(true);
                    setLoading(true)
                    dispatch(authAction.loginUser(values))
                      .then(async (result) => {
                        console.log("result:", result);
                        localStorage.setItem("forteworksToken", result.token);
                        setTimeout(() =>  setLoading(false), 3000);
                        if (result.success) {
                          setInProgress(true);
                          //setLoading(false)
                        }
                      })
                      .catch((err) => console.log(err));
                  }}
                >
                  {(props) => (
                    //className={classes[cardAnimaton]}
                    <Card>
                      {/* <CardHeader color="primary" className={classes.cardHeader}>
                      <h4>Login</h4>
                    </CardHeader> */}
                      <div>
                        <div style={{ textAlign: "center" }}>
                          <input
                            style={{
                              marginTop: "15px",
                              border: "none",
                              outline: "none",
                              borderBottom: "solid 1px #ddd",
                              padding: "10px",
                            }}
                            placeholder="Email"
                            onChange={props.handleChange("email")}
                            value={props.values.email}
                            onBlur={props.handleBlur("email")}
                          />
                          <div style={{ color: "salmon" }}>
                            {props.touched.email && props.errors.email}
                          </div>
                          <input
                            style={{
                              marginTop: "15px",
                              border: "none",
                              outline: "none",
                              borderBottom: "solid 1px #ddd",
                              padding: "10px",
                            }}
                            placeholder="Password"
                            onChange={props.handleChange("password")}
                            value={props.values.password}
                            onBlur={props.handleBlur("password")}
                          />
                          <div style={{ color: "salmon" }}>
                            {props.touched.password && props.errors.password}
                          </div>

                          {/* <Button
                            style={{ marginTop: "15px" }}
                            onClick={props.handleSubmit}
                          >
                            <div>Login</div>
                          </Button> */}
                          {/* <ButtonComponent onClick={onClick} loading={loading} /> */}
                          <ButtonComponent onClick={props.handleSubmit} loading={loading} />
                        </div>
                      </div>
                    </Card>
                  )}
                </Formik>

                {/* //end  part 3*/}
              </div>
            </div>
          </div>
        </Container>
      </React.Fragment>
    );
  } else {
    return (
      <div>
        <Router>
          <Toolbar className={classes.toolbar}>
            <Grid container>
              <Grid item xs={12} sm={2}>
              <div style={{ listStyle: "none", display: "inline" }}>
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
                </div>
              </Grid>
              <Grid item xs={12} sm={4}>
                x1
              </Grid>
              <Grid item xs={12} sm={3}>
                x2
               
              </Grid>
              <Grid item xs={12} sm={3}>
                <div style={{ listStyle: "none", display: "inline" }}>
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
                </div>
              </Grid>
            </Grid>
          </Toolbar>
          <Route path="/profile" component={ProfilePage} />
          <Route path="/search" component={SearchPage} />
        </Router>
      </div>
    );
  }
}

/*
import React from 'react';
import { render } from 'react-dom';
import { CircularProgress, Button } from '@material-ui/core';
import ColoredLinearProgress from './LineProgress';

function ButtonComponent(props) {
  const { onClick, loading } = props;
  return (
    <Button variant="contained" onClick={onClick} disabled={loading}>
      {loading && <CircularProgress size={14} />}
      {!loading && 'Click Me'}
    </Button>
  );
}

class LoadingButton extends React.Component {
  constructor() {
    super();
    this.state = { loading: false };
  }

  onClick = () => {
    this.setState({ loading: true });
    setTimeout(() => this.setState({ loading: false }), 3000); //3 seconds
  };

  render() {
    return (
      <React.Fragment>
        {this.state.loading && <ColoredLinearProgress />}
        <br />
        <ButtonComponent onClick={this.onClick} loading={this.state.loading} />
      </React.Fragment>
    );
  }
}

const rootElement = document.querySelector('#root');
if (rootElement) {
  render(<LoadingButton />, rootElement);
}
*/