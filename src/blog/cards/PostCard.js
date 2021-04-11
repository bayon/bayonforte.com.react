import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import * as postAction from "../../redux/actions/postAction";
import PostImageForm from "../components/PostImageForm";
import "./card.css";
import PostPreviewCard from "./PostPreviewCard";


const formSchema = yup.object({
  title: yup.string().required().min(3),
  email: yup.string().email().required(),
  phone: yup.string().min(10),
});

const PostCard = (props) => {
   
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
              Create a post
            {/*  
                POST FIELDS as of 4/11/2021
                _id: ...
                userId: { type: String, required: true},
                category: { type: String, required: true},
                title: {type:String , required:true},
                description: {type: String, required: true},
                email: { type: String, required: true},
                phone: { type: String} ,
                postImage: { type: String },  
                city: { type: String },
                state: { type: String },
                zip: { type: String },
                website: { type: String }
            
            */}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <button
            onClick={() => {
              setSeeDetails(!seeDetails);
            }}
          >
            {seeDetails ? "close" : "create"}
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
                <PostImageForm props={props}></PostImageForm>
              </Grid>
              <Grid item xs={12} sm={6}>
                {/* //FORM AND REDUX  part 3 JSX*/}
                <Formik
                  initialValues={{
                    title: props.post.title,
                    email: props.post.email,
                    phone: props.post.phone,
                    address: props.post.address,
                    city: props.post.city,
                    state: props.post.state,
                    zip: props.post.zip,
                    postImage: props.post.postImage
                  }}
                  validationSchema={formSchema}
                  onSubmit={(values) => {
                    console.log("values:", values);
                    setInProgress(true);
                     dispatch(postAction.createPost(values))
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
                    <Grid container className="PostCardForm">
                      <Grid item xs={12} sm={6}>
                        <Grid item xs={12} sm={6}>
                          <label>Post Title</label>
                        </Grid>
                        <Grid item xs={12}>
                          <input
                            placeholder="Post Title"
                            onChange={props.handleChange("title")}
                            value={props.values.title}
                            onBlur={props.handleBlur("title")}
                          />

                          <div style={{ color: "salmon" }}>
                            {props.touched.title && props.errors.title}
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
                            value={props.values.postImage}
                            disabled
                          />
                        

                        {/* UPLOAD AN IMAGE: https://www.youtube.com/watch?v=SAUvlkTDMM4 */}
                        <Grid item xs={12}>
                          <button onClick={props.handleSubmit}>Create</button>
                        </Grid>
                      </Grid>
                    </Grid>
                  )}
                </Formik>

                {/* //end  part 3*/}
              </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12}>
                    <PostPreviewCard></PostPreviewCard>
                </Grid>
            </Grid>
          </React.Fragment>
        </>
      )}
    </div>
  );
};

export default PostCard;
