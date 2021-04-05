import { Card, CircularProgress } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
//FORM AND REDUX part 1: in header
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux"; //useSelector?
import * as yup from "yup";
import * as authAction from "../../redux/actions/authAction";
import logo from "../assets/img/pexels-pixabay-159201.jpg";
//stripe 
import StripeCard from '../components/StripeCard';

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

const formSchema = yup.object({
    fullName: yup.string().required().min(3),
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
});
//end  part 1

function ButtonComponent(props) {
  const { onClick, loading } = props;
  return (
    <Button
      variant="contained"
      onClick={onClick}
      disabled={loading}
      style={{ marginTop: "15px", marginBottom: "15px" }}
    >
      {loading && <CircularProgress size={14} />}
      {!loading && "Register"}
    </Button>
  );
}

export default function RegisterPage(props) {
  const [loading, setLoading] = useState(false);
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
       
       <Grid
              container
              spacing={0}
              align="center"
              justify="center"
              direction="column"
               
            >
          <Paper
            style={{
              backgroundImage: `url(${logo})`,
              backgroundSize: "cover",
              height: "400px",
            }}
          >
          
              <Grid item xs={12} sm={6} style={{marginTop:"15px" }}>
                {/* //FORM AND REDUX  part 3 JSX*/}
                <Formik
                  initialValues={{
                    fullName:"",
                    email: "",
                    password: "",
                  }}
                  validationSchema={formSchema}
                  onSubmit={(values) => {
                    console.log("values:", values);
                    setInProgress(true);
                    setLoading(true);
                    dispatch(authAction.registerUser(values))
                      .then(async (result) => {
                        console.log("register result:", result);
                        localStorage.setItem("forteworksToken", result.token);
                        localStorage.setItem("registerToken", result.token);
                        setTimeout(() => setLoading(false), 3000);
                        if (result.success) {
                          setInProgress(true);
                          //setLoading(false)
                        }
                      })
                      .catch((err) => console.log(err));
                  }}
                >
                  {(props) => (
                    <Card>
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
                            placeholder="Full Name"
                            onChange={props.handleChange("fullName")}
                            value={props.values.fullName}
                            onBlur={props.handleBlur("fullName")}
                          />
                          <div style={{ color: "salmon" }}>
                            {props.touched.fullName && props.errors.fullName}
                          </div>
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

                          <ButtonComponent
                            onClick={props.handleSubmit}
                            loading={loading}
                          />
                        </div>
                      </div>
                    </Card>
                  )}
                </Formik>
                <div style={{background:"white",height:"100px"}}>
                  <p>needs to be https</p>
                <StripeCard />
                </div>
              

                {/* //end  part 3*/}
              </Grid>
           
          </Paper>
          </Grid>
        
      </React.Fragment>
    );
  } else {
    return (
      <div>
        <p>no longer needed submenu</p>
        {/* <Router>
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
          <Route path="/profile" component={ProfilePage} data={"string of data"}/>
          <Route path="/search" component={SearchPage} />
        </Router> */}
      </div>
    );
  }
}
