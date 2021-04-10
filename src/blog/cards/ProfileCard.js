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
   
  const dispatch = useDispatch();
  const [seeDetails, setSeeDetails] = useState(false);
  const [inProgress, setInProgress] = useState(false);

  useEffect(() => {
    setInProgress(inProgress);
  }, [inProgress]);

const us_states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
;
  return (
    <div className="card-plain">
      <Grid container spacing={0} direction="row">
        <Grid item xs={12} sm={9}>
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
              <Grid item xs={12} sm={6}>
                {/* //FORM AND REDUX  part 3 JSX*/}
                <Formik
                  initialValues={{
                    fullName: props.user.fullName,
                    email: props.user.email,
                    phone: props.user.phone,
                    address: props.user.address,
                    city: props.user.city,
                    state: props.user.state,
                    zip: props.user.zip,
                    profileImage: props.user.profileImage
                  }}
                  validationSchema={formSchema}
                  onSubmit={(values) => {
                    console.log("values:", values);
                    setInProgress(true);
                     dispatch(authAction.updateUser(values))
                      .then(async (result) => {
                        console.log("update result:", result);

                        if (result.success) {
                          setInProgress(true);
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
                        <Grid item xs={12}>
                          <label>Address</label>
                        </Grid>
                        <Grid item xs={12}>
                          <input
                            placeholder="Address"
                            onChange={props.handleChange("address")}
                            value={props.values.address}
                            onBlur={props.handleBlur("address")}
                          />
                          <div style={{ color: "salmon" }}>
                            {props.touched.address && props.errors.address}
                          </div>
                        </Grid>
                        <Grid item xs={12}>
                          <label>City</label>
                        </Grid>
                        <Grid item xs={12}>
                          <input
                            placeholder="City"
                            onChange={props.handleChange("city")}
                            value={props.values.city}
                            onBlur={props.handleBlur("city")}
                          />
                          <div style={{ color: "salmon" }}>
                            {props.touched.city && props.errors.city}
                          </div>
                        </Grid>
                        <Grid item xs={12}>
                          <label>State</label>
                        </Grid>
                        <Grid item xs={12}>
                        <select value={props.values.state} onChange={props.handleChange("state")} style={{border:"none",outline:"none",minWidth:"90px"}}>
                            
                            {
                              us_states.map( (item,index ) => {
                                return(
                                  <option key={index} value={index}  >{item}</option>
                                )
                              })
                            }
                          </select>
                        </Grid>
                        <Grid item xs={12}>
                          <label>Zip</label>
                        </Grid>
                        <Grid item xs={12}>
                          <input
                            placeholder="Zip"
                            onChange={props.handleChange("zip")}
                            value={props.values.zip}
                            onBlur={props.handleBlur("zip")}
                          />
                          <div style={{ color: "salmon" }}>
                            {props.touched.zip && props.errors.zip}
                          </div>
                        </Grid>
                        <input
                            type="hidden"
                            onChange={()=>{}}
                            value={props.values.profileImage}
                            disabled
                          />
                        

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
