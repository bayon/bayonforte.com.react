import { Typography } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import React, { useEffect, useState } from "react";
import "./card.css";

 
const PostDisplayCard = (props) => {

     const [seeDetails,setSeeDetails] = useState(false); 

    const [inProgress, setInProgress] = useState(false);
    console.log("inProgress:", inProgress);
    useEffect(() => {
      setInProgress(inProgress);
    }, [inProgress]);
  
     

  return (
    <div  className="card-plain">
      <Typography variant="h5" component="h2">
        {props.post.title}
      </Typography>
  
      <button onClick={() => {setSeeDetails(!seeDetails)} } >{seeDetails ? "hide" : "details" }</button>
      {seeDetails && 
      (
        <>
        
        <div style={{ marginTop: 15 }}>
                <a
                  href={"mailto:"+props.post.email}
                  style={{ color: "#222", textDecoration: "none" }}
                >
                  {props.post.email} <Icon>email</Icon>
                </a>
              </div>
              <div>
              {props.post.description}
              </div>
              <div>
              {props.post.phone}
              </div>
        </>
      )
      }
    </div>
  );
};

export default PostDisplayCard;
