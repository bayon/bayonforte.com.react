import { Typography } from "@material-ui/core";
import React from "react";
import "./card.css";

const PlainCard = (props) => {
    console.log('PlainCard props:',props)
  return (
    <div  className="card-plain">
      <Typography variant="h5" component="h2">
        {props.user.fullName}
      </Typography>

      <Typography variant="body2" component="p" color="textSecondary">
      {props.user.email}
        
        
      </Typography>
      <button onClick={() => {props.details(props.user)}} >details</button>
    </div>
  );
};

export default PlainCard;
