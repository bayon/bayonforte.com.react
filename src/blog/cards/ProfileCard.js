import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import * as authAction from "../../redux/actions/authAction";
import ImageForm from "../components/ImageForm";
import "./card.css";

const formSchema = yup.object({
  fullName: yup.string().required().min(3),
  email: yup.string().email().required(),
  phone: yup.string().min(10),
});

const ProfileCard = (props) => {
  console.log("ProfileCard props:", props);

  const dispatch = useDispatch();

  const [seeDetails, setSeeDetails] = useState(false);

  const [inProgress, setInProgress] = useState(false);
  console.log("inProgress:", inProgress);
  useEffect(() => {
    setInProgress(inProgress);
  }, [inProgress]);

  const [loading, setLoading] = useState(false);

  return (
    <div className="card-plain">
      <Grid 
      container 
      spacing={0}               
      direction="row"
>
        <Grid item xs={12} sm={9} >
          <Typography variant="h5" component="h2">
            {props.user.fullName}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <button
            onClick={() => {
              setSeeDetails(!seeDetails);
            }}
          >
            {seeDetails ? "hide" : "edit"}
          </button>
        </Grid>
      </Grid>

 
      {seeDetails && (
        <>
          
          <React.Fragment>
            <Grid
              container
              spacing={0}
              align="center"
              justify="center"
              direction="row"
            >
              <Grid item xs={12} sm={6}>
                <ImageForm props={props}></ImageForm>
              </Grid>
              <Grid item xs={12} sm={6} >
                {/* //FORM AND REDUX  part 3 JSX*/}
                <Formik
                  initialValues={{
                    fullName: props.user.fullName,
                    email: props.user.email,
                    phone: props.user.phone,
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
                        props.refresh();
                      })
                      .catch((err) => console.log(err));
                  }}
                >
                  {(props) => (
                    <Grid container className="ProfileCardForm">
                      <Grid item xs={12} sm={6}>
                        <Grid item xs={12} sm={6}>
                          <label>Ful Name</label>
                        </Grid>
                        <Grid item xs={12}>
                          <input
                            placeholder="Full Name"
                            onChange={props.handleChange("fullName")}
                            value={props.values.fullName}
                            onBlur={props.handleBlur("fullName")}
                          />

                          <div style={{ color: "salmon" }}>
                            {props.touched.fullName && props.errors.fullName}
                          </div>
                        </Grid>

                        <Grid item xs={12}>
                          <label>Email</label>
                        </Grid>
                        <Grid item xs={12}>
                          <input
                            placeholder="Email"
                            onChange={props.handleChange("email")}
                            value={props.values.email}
                            onBlur={props.handleBlur("email")}
                            disabled
                          />
                          <div style={{ color: "salmon" }}>
                            {props.touched.email && props.errors.email}
                          </div>
                        </Grid>
                        <Grid item xs={12}>
                          <label>Phone</label>
                        </Grid>
                        <Grid item xs={12}>
                          <input
                            placeholder="Phone"
                            onChange={props.handleChange("phone")}
                            value={props.values.phone}
                            onBlur={props.handleBlur("phone")}
                          />
                          <div style={{ color: "salmon" }}>
                            {props.touched.phone && props.errors.phone}
                          </div>
                        </Grid>
                        {/* UPLOAD AN IMAGE: https://www.youtube.com/watch?v=SAUvlkTDMM4 */}
                        <Grid item xs={12}>
                          <button onClick={props.handleSubmit}>Update</button>
                        </Grid>
                      </Grid>
                    </Grid>
                  )}
                </Formik>

                {/* //end  part 3*/}
              </Grid>
            </Grid>
          </React.Fragment>
        </>
      )}
    </div>
  );
};

export default ProfileCard;
