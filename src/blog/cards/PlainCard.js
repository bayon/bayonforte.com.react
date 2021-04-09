import { CircularProgress, Typography } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as yup from "yup";
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
        </>
      )
      }
    </div>
  );
};

export default PlainCard;
