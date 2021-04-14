import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as yup from "yup";
// import PostImageForm from "../components/PostImageForm";
import { config } from "../../Constants";
import * as postAction from "../../redux/actions/postAction";
// import forteworks.com from "../components/forteworks.com";
import "./card.css";




const HOST_URL = config.url.HOST_URL;



const formSchema = yup.object({
  title: yup.string().required().min(3),
  email: yup.string().email().required(),
  phone: yup.string().min(10),
});

const PostCreateCard = (props) => {
   
  const dispatch = useDispatch();
  const [seeDetails, setSeeDetails] = useState(false);
  const [inProgress, setInProgress] = useState(false);

 var user = useSelector((state) => state.auth.user);
console.log("STATE---------user:",user)
  useEffect(() => {
    setInProgress(inProgress);
  }, [inProgress]);
  var us_states = useSelector( (state) => state.auth.usstates)
  var categories = useSelector( (state) =>  state.post.categories)
 

const post_types = ["select one", "looking for work","looking to hire"]
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
                postType: { type: String, required: true},
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
          {/* <PostStatus></PostStatus > */}
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
                {/* <PostImageForm props={props}></PostImageForm> */}
                <img
              src={`${HOST_URL}/public/images/`+ user.data.profileImage } //+ props.props.post.postImage
              alt="img"
              style={{ height: "100px", width: "auto", borderRadius: "15px" }}
            />
              </Grid>
              <Grid item xs={12} sm={6}>
                {/* //FORM AND REDUX  part 3 JSX*/}
                <Formik
                  initialValues={{
                    userId: user.data._id,
                    title: '',
                    description: '',
                    postType: '',
                    category: '',
                    email: user.data.email,
                    phone: user.data.phone,
                    address: user.data.address,
                    city: user.data.city,
                    state: user.state,
                    zip: user.data.zip,
                    postImage: user.data.profileImage
                  }}
                  // !PostImage REQUIRED here so as to not get deleted accidentally.
                  validationSchema={formSchema}
                  onSubmit={(values) => {
                    console.log("values:", values);
                    setInProgress(true);
                    setSeeDetails(!seeDetails);
                     dispatch(postAction.createPost(values))
                      .then(async (result) => {
                        console.log("create post result:", result);//good.
                       // ANOTHER dispatch would ONLY be good here for updating state. 
                       // whether taht will update at the users posts list is the question. 
                       //TRY TO RESET STATUS COLOR TO GREEN AFTER SUCCESSFUL CREATE.
                        dispatch(postAction.setStatusGreen()).catch((err) => console.error(err))
                         
                      })
                      .catch((err) => console.log(err));
                  }}
                >
                  {(props) => (
                    <Grid container className="PostCreateCardForm">
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
                          <label>postType</label>
                        </Grid>
                        <Grid item xs={12}>
                        <select className="cardSelect" value={props.values.postType} onChange={props.handleChange("postType")} >
                            
                            {
                              post_types.map( (item,index ) => {
                                return(
                                  <option key={index} value={index}  >{item}</option>
                                )
                              })
                            }
                          </select>
                        </Grid>




 
                        <Grid item xs={12}>
                          <input
                            placeholder="Description"
                            onChange={props.handleChange("description")}
                            value={props.values.description}
                            onBlur={props.handleBlur("description")}
                          />
                          <div style={{ color: "salmon" }}>
                            {props.touched.description && props.errors.description}
                          </div>
                        </Grid>


                        <Grid item xs={12}>
                          <label>Category</label>
                        </Grid>
                        <Grid item xs={12}>
                        <select value={props.values.category} onChange={props.handleChange("category")} className="cardSelect"  >
                            
                            {
                              categories.map( (item,index ) => {
                                return(
                                  <option key={index} value={index} >{item}</option>
                                )
                              })
                            }
                          </select>
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
                           <input
                            type="hidden"
                            onChange={()=>{}}
                            value={user._id}
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
          
          </React.Fragment>
        </>
      )}
      <p className="cardDevNote" >PostCreateCard</p>
    </div>
  );
};

export default PostCreateCard;
