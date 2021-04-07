import { CircularProgress, Typography } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Formik } from 'formik';
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import * as authAction from "../../redux/actions/authAction";
import "./card.css";



const formSchema = yup.object({
  fullName: yup.string().required().min(3),
  email: yup.string().email().required(),

});



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
      {!loading && "Update"}
    </Button>
  );
}

const fuckall = () => {
  console.log('what the hell....')
}

const PlainCard = (props) => {
    console.log('PlainCard props:',props)

    const dispatch = useDispatch();
  
    const [seeDetails,setSeeDetails] = useState(false); 

    const [inProgress, setInProgress] = useState(false);
    console.log("inProgress:", inProgress);
    useEffect(() => {
      setInProgress(inProgress);
    }, [inProgress]);
  
    const [loading, setLoading] = useState(false);
    

  return (
    <div  className="card-plain">
      <Typography variant="h5" component="h2">
        {props.user.fullName}
      </Typography>

  
      {/* <button onClick={() => {props.details(props.user)}} >details</button> */}
      <button onClick={() => {setSeeDetails(!seeDetails)} } >{seeDetails ? "hide" : "details" }</button>
      {seeDetails && 
      (
        <>
        <Typography variant="body2" component="p" color="textSecondary">
        {props.user.email}
        
          
        </Typography>
        <p>To edit: I need a formik form to hit the update endpoint . ANd those form inputs pre-populated with current values.</p>
        <p>Need an auth action for update . </p>
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
              // backgroundImage: `url(${logo})`,
              backgroundSize: "cover",
              height: "400px",
            }}
          >
            <Grid item xs={12} sm={6} style={{ marginTop: "15px" }}>
              {/* //FORM AND REDUX  part 3 JSX*/}
              <Formik
                initialValues={{
                  fullName: props.user.fullName,
                  email: props.user.email
                  
                }}
                validationSchema={formSchema}
                onSubmit={(values) => {
                  console.log("values:", values);
                  setInProgress(true);
                  setLoading(true);
                  dispatch(authAction.updateUser(values))
                    .then(async (result) => {
                      console.log("update result:", result);
                     
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
                      
                       <Button
                       
                       onClick={props.handleSubmit}>Update</Button>

                        {/* <ButtonComponent
                            onClick={props.handleSubmit}
                            // onClick={fuckall}
                          loading={loading}
                        /> */}
                      </div>
                    </div>
                  </Card>
                )}
              </Formik>
             

              {/* //end  part 3*/}
            </Grid>
          </Paper>
        </Grid>
       
      </React.Fragment>
        </>
      )
      }
    </div>
  );
};

export default PlainCard;
