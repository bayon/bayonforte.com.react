import Grid from "@material-ui/core/Grid";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import * as postAction from "../../redux/actions/postAction";
import PostStatus from "../components/PostStatus";
import "./card.css";


const formSchema = yup.object({
  title: yup.string().required().min(3),
  email: yup.string().email().required(),
  phone: yup.string().min(10),
});

const EditPostCard = (props) => {
  console.log("EDIT POST CARD props:", props);
  const Kolor = useSelector((state) => state.post.statusColor);


  useEffect(() => {
    dispatch(postAction.getStatusColor())
      .then(async () => {
        // result would be undefined
        console.log("NEW >>> hook status color:", Kolor);
        //setKolor(Kolor)
      })
      .catch((err) => console.log(err));
      /* Dependencies: 
        import * as statusAction from "../../redux/actions/statusAction";
        import { useDispatch, useSelector } from "react-redux";
        const Kolor = useSelector((state) => state.status.statusColor);
      */
  }, [Kolor]);



  
 

  /* props.data.xxx
category: "1"
city: "asdfasdf"
description: "will do anything"
email: "sdf@sdf.com"
phone: "1231231233"
postImage: ""
state: "5"
title: "Need Cash Now"
userId: "601a9e4d64d8aa0004c8c07b"
zip: "34555"
__v: 0
_id: "60730537d09d5d33501fc987"
   */

  const dispatch = useDispatch();
  const [seeDetails, setSeeDetails] = useState(false);
  const [inProgress, setInProgress] = useState(false);

  var user = useSelector((state) => state.auth.user);
  var us_states = useSelector( (state) => state.auth.usstates)
  console.log("STATE---------user:", user);
  useEffect(() => {
    setInProgress(inProgress);
  }, [inProgress]);


  
  const post_categories = ["select one", "looking for work", "looking to hire"];

  return (
    <>
      <React.Fragment>
        <Grid
          container
          spacing={1}
          align="center"
          justify="center"
          direction="row"
          style={{padding:"1em"}}

        >
         
          <Grid item xs={12} sm={8}>
            {/* //FORM AND REDUX  part 3 JSX*/}
    <PostStatus></PostStatus>
    {/* <button onClick={changeStatus("blue")}>hook blue</button>
    <button onClick={changeStatus("green")}>hook green</button> */}
            <Formik
              initialValues={{
                postId: props.data._id,
                userId: props.data.userId,
                title: props.data.title,
                description: props.data.description,
                category: props.data.category,
                email: props.data.email,
                phone: props.data.phone,
                address: props.data.address,
                city: props.data.city,
                state: props.data.state,
                zip: props.data.zip,
                postImage: props.data.profileImage,
              }}
              // !PostImage REQUIRED here so as to not get deleted accidentally.
              validationSchema={formSchema}
              onSubmit={(values) => {
                console.log("values:", values);
                setInProgress(true);
                props.closeEdit();
                setSeeDetails(!seeDetails);
                dispatch(postAction.updatePost(values))
                  .then(async (result) => {
                    console.log("create post result:", result);
                    // seeDetails(false);
                    if (result.success) {
                      //setInProgress(true);
                      //seeDetails(false);
                    }
                    console.log("IT ALL STARTS HERE WITH REFRESH POSTS FOR USER.")
                    props.refresh();
                  })
                  .catch((err) => console.log(err));
              }}
            >
              {(props) => (
                <Grid container className="EditPostCardForm">
                  <Grid item xs={12} sm={8}>
                  <p className="cardDevNote" >EditPostCard</p>

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
                      <select
                        className="cardSelect"
                        value={props.values.category}
                        onChange={props.handleChange("category")}
                        style={{
                          border: "none",
                          outline: "none",
                          minWidth: "90px",
                        }}
                      >
                        {post_categories.map((item, index) => {
                          return (
                            <option key={index} value={index}>
                              {item}
                            </option>
                          );
                        })}
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
                      <select
                      className="cardSelect"
                        value={props.values.state}
                        onChange={props.handleChange("state")}
                        style={{
                          border: "none",
                          outline: "none",
                          minWidth: "90px",
                        }}
                      >
                        {us_states.map((item, index) => {
                          return (
                            <option key={index} value={index}>
                              {item}
                            </option>
                          );
                        })}
                      </select>
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
                      onChange={() => {}}
                      value={props.values.postImage}
                      disabled
                    />
                    <input
                      type="hidden"
                      onChange={() => {}}
                      value={user._id}
                      disabled
                    />

                    {/* UPLOAD AN IMAGE: https://www.youtube.com/watch?v=SAUvlkTDMM4 */}
                    <Grid container direction="row">
                      <Grid item xs={12} sm={4}>
                        <button onClick={props.handleSubmit} style={{color:"green"}}>Update</button>
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <button onClick={()=>{console.log('code to delete ')}} style={{color:"red"}}>DELETE</button>
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        active/inactive
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              )}
            </Formik>

            {/* //end  part 3*/}
          </Grid>
          <Grid item xs={12} sm={1}>
            <button onClick={props.closeEdit} style={{color:"orange"}}>cancel</button>
          </Grid>
        </Grid>
      
      </React.Fragment>
    </>
  );
};

export default EditPostCard;
