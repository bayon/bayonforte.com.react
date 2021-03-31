import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import "./card.css";



const PlainCard = (props) => {
    console.log('PlainCard props:',props)
    const [seeDetails,setSeeDetails] = useState(false); 

  return (
    <div  className="card-plain">
      <Typography variant="h5" component="h2">
        {props.user.fullName}
      </Typography>

  
      {/* <button onClick={() => {props.details(props.user)}} >details</button> */}
      <button onClick={() => {setSeeDetails(!seeDetails)} } >{seeDetails ? "hide" : "details" }</button>
      {seeDetails && 
      (
        <Typography variant="body2" component="p" color="textSecondary">
        {props.user.email}
          
          
        </Typography>
      )
      }
    </div>
  );
};

export default PlainCard;
