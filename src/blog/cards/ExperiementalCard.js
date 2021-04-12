// import Grid from "@material-ui/core/Grid";
// import { Formik } from "formik";
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from 'react-redux';
// import * as yup from "yup";
// // import PostImageForm from "../components/PostImageForm";
// import { config } from "../../Constants";
// import * as postAction from "../../redux/actions/postAction";
// import "./card.css";
 



// const HOST_URL = config.url.HOST_URL;



// const formSchema = yup.object({
//   title: yup.string().required().min(3),
//   email: yup.string().email().required(),
//   phone: yup.string().min(10),
// });

// const ExperimentalCard = (props) => {
   
//   const dispatch = useDispatch();
//   const [seeDetails, setSeeDetails] = useState(false);
//   const [inProgress, setInProgress] = useState(false);

//  var user = useSelector((state) => state.auth.user);
// console.log("STATE---------user:",user)
//   useEffect(() => {
//     setInProgress(inProgress);
//   }, [inProgress]);
//   var us_states = useSelector( (state) => state.auth.usstates)

 

// const post_categories = ["select one", "looking for work","looking to hire"]
//   return (
//     <div className="card-plain">
      

      
//         <>
//           <React.Fragment>
//             <Grid
//               container
//               spacing={0}
//               align="center"
//               justify="center"
//               direction="column"
//             >
            
//               <Grid item xs={12} sm={12}>
//                 {/* //FORM AND REDUX  part 3 JSX*/}
//                 <Formik
//                   initialValues={{
//                     userId: user.data._id,
//                     title: '',
//                     description: '',
//                     category: '',
//                     email: user.data.email,
//                     phone: user.data.phone,
//                     address: user.data.address,
//                     city: user.data.city,
//                     state: user.state,
//                     zip: user.data.zip,
//                     postImage: user.data.profileImage
//                   }}
//                   // !PostImage REQUIRED here so as to not get deleted accidentally.
//                   validationSchema={formSchema}
//                   onSubmit={(values) => {
//                     console.log("values:", values);
//                     setInProgress(true);
//                     setSeeDetails(!seeDetails);
//                      dispatch(postAction.createPost(values))
//                       .then(async (result) => {
//                         console.log("create post result:", result);
//                         // seeDetails(false);
//                         if (result.success) {
//                           //setInProgress(true);
//                           //seeDetails(false);
//                         }
//                         console.log('******** props:',props)
//                         props.refresh();
//                       })
//                       .catch((err) => console.log(err));
//                   }}
//                 >
//                   {(props) => (
//                     <Grid container className="ExperimentalCardForm">
//                       <Grid item xs={12} sm={12}>
                        
//                         <Grid item xs={12}>
//                           <input
//                             placeholder="Post Title"
//                             onChange={props.handleChange("title")}
//                             value={props.values.title}
//                             onBlur={props.handleBlur("title")}
//                           />

//                           <div style={{ color: "salmon" }}>
//                             {props.touched.title && props.errors.title}
//                           </div>
//                         </Grid> 

//                         <Grid item xs={12}>
//                         <select className="cardSelect" value={props.values.category} onChange={props.handleChange("category")} >
                            
//                             {
//                               post_categories.map( (item,index ) => {
//                                 return(
//                                   <option key={index} value={index}  >{item}</option>
//                                 )
//                               })
//                             }
//                           </select>
//                         </Grid>
//                         <Grid item xs={12}>
//                           <input
//                             placeholder="Description"
//                             onChange={props.handleChange("description")}
//                             value={props.values.description}
//                             onBlur={props.handleBlur("description")}
//                           />
//                           <div style={{ color: "salmon" }}>
//                             {props.touched.description && props.errors.description}
//                           </div>
//                         </Grid>
                       
//                         <Grid item xs={12}>
//                           <input
//                             placeholder="Email"
//                             onChange={props.handleChange("email")}
//                             value={props.values.email}
//                             onBlur={props.handleBlur("email")}
                            
//                           />
//                           <div style={{ color: "salmon" }}>
//                             {props.touched.email && props.errors.email}
//                           </div>
//                         </Grid>
                     
//                         <Grid item xs={12}>
//                           <input
//                             placeholder="Phone"
//                             onChange={props.handleChange("phone")}
//                             value={props.values.phone}
//                             onBlur={props.handleBlur("phone")}
//                           />
//                           <div style={{ color: "salmon" }}>
//                             {props.touched.phone && props.errors.phone}
//                           </div>
//                         </Grid>
                      
//                         <Grid item xs={12}>
//                           <input
//                             placeholder="Address"
//                             onChange={props.handleChange("address")}
//                             value={props.values.address}
//                             onBlur={props.handleBlur("address")}
//                           />
//                           <div style={{ color: "salmon" }}>
//                             {props.touched.address && props.errors.address}
//                           </div>
//                         </Grid>
                       
//                         <Grid item xs={12}>
//                           <input
//                             placeholder="City"
//                             onChange={props.handleChange("city")}
//                             value={props.values.city}
//                             onBlur={props.handleBlur("city")}
//                           />
//                           <div style={{ color: "salmon" }}>
//                             {props.touched.city && props.errors.city}
//                           </div>
//                         </Grid>
                    
//                         <Grid item xs={12}>
//                         <select value={props.values.state} onChange={props.handleChange("state")} className="cardSelect"  >
                            
//                             {
//                               us_states.map( (item,index ) => {
//                                 return(
//                                   <option key={index} value={index}  >{item}</option>
//                                 )
//                               })
//                             }
//                           </select>
//                         </Grid>
                      
//                         <Grid item xs={12}>
//                           <input
//                             placeholder="Zip"
//                             onChange={props.handleChange("zip")}
//                             value={props.values.zip}
//                             onBlur={props.handleBlur("zip")}
//                           />
//                           <div style={{ color: "salmon" }}>
//                             {props.touched.zip && props.errors.zip}
//                           </div>
//                         </Grid>
//                         <input
//                             type="hidden"
//                             onChange={()=>{}}
//                             value={props.values.postImage}
//                             disabled
//                           />
//                            <input
//                             type="hidden"
//                             onChange={()=>{}}
//                             value={user._id}
//                             disabled
//                           />
                        

//                         {/* UPLOAD AN IMAGE: https://www.youtube.com/watch?v=SAUvlkTDMM4 */}
//                         <Grid item xs={12}>
//                           <button onClick={props.handleSubmit}>Create</button>
//                           <p>button needs to close the modal.</p>
//                         </Grid>
//                       </Grid>
//                     </Grid>
//                   )}
//                 </Formik>

//                 {/* //end  part 3*/}
//               </Grid>
//             </Grid>
          
//           </React.Fragment>
//         </>
      
      
//     </div>
//   );
// };

// export default ExperimentalCard;

















// // import React, { useEffect, useState } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import * as postAction from "../../redux/actions/postAction";
// // import PostCreateCard from "../cards/PostCreateCard";

// // const ExperimentalCard = (props) => {
// //   var auth = useSelector((state) => state.auth.authorized);
// //   const [post, setPost] = useState({});
// //   const dispatch = useDispatch();

// //    useEffect(() => {
// //     dispatch(postAction.getPost())
// //       .then(async (result) => {
// //         console.log("result:", result);
// //         setPost(result.data);
// //       })
// //       .catch((err) => console.log(err));
// //   }, []);

// //   if (!auth) {
// //     return <div>not authorized.</div>;
// //   }
// //   const getPosts = () => {
// //     dispatch(postAction.getPost())
// //       .then(async (result) => {
// //         console.log("result:", result);
// //         setPost(result.data);
// //       })
// //       .catch((err) => console.log(err));
// //   };

  

// //   return (
// //     <div>        
// //         <PostCreateCard post={post} refresh={getPosts}></PostCreateCard>
        
        
      
// //     </div>
// //   );
// // };

// // export default ExperimentalCard;
