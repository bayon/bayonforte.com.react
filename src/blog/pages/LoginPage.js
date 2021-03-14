import {
  Card
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
//FORM AND REDUX part 1: in header
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux"; //useSelector?
import * as yup from "yup";
import * as authAction from "../../redux/actions/authAction";




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

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  //const classes = useStyles();
  const { ...rest } = props;

  //FORM AND REDUX  part 2: default export function
  const dispatch = useDispatch();
  const [inProgress, setInProgress] = useState(false);
  useEffect(() => {
    setInProgress(false);
  }, [inProgress]);
  //end  part 2

  return (
    
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="lg">
        <div >
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
                  dispatch(authAction.loginUser(values))
                    .then(async (result) => {
                      console.log("result:", result);
                      localStorage.setItem("forteworksToken", result.token);
                    })
                    .catch((err) => console.log(err));
                }}
              >
                {(props) => (
                  //className={classes[cardAnimaton]}
                  <Card >
                    {/* <CardHeader color="primary" className={classes.cardHeader}>
                      <h4>Login</h4>
                    </CardHeader> */}
                    <div>
                      <div style={{ textAlign: "center" }}>
                        <input
                          style={{marginTop:'15px',border:'none',outline:'none', borderBottom:'solid 1px #ddd', padding:'10px'}}
                          placeholder="Email"
                          onChange={props.handleChange("email")}
                          value={props.values.email}
                          onBlur={props.handleBlur("email")}
                        />
                        <div style={{color:'salmon'}} >{props.touched.email && props.errors.email}</div>
                        <input
                          style={{marginTop:'15px',border:'none',outline:'none', borderBottom:'solid 1px #ddd', padding:'10px'}}
                          placeholder="Password"
                          onChange={props.handleChange("password")}
                          value={props.values.password}
                          onBlur={props.handleBlur("password")}
                        />
                        <div style={{color:'salmon'}}>
                          {props.touched.password && props.errors.password}
                        </div>

                        <Button
                          style={{marginTop:'15px'}}
                          onClick={props.handleSubmit}
                        >
                          <div>Login</div>
                        </Button>
                      </div>
                    </div>
                    <div>
                      <div>
                      <div style={{ textAlign: "center" }}>
                        <div>Don't Have an Account?</div>

                        <Button 
                        onClick={() => console.log("register")}
                        style={{marginTop:'15px'}}

                        >
                          <div>Register</div>
                        </Button>
                      </div>
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
}

 
