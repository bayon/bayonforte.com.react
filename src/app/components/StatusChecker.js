import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as statusAction from "../../redux/actions/statusAction";

export default function StatusChecker() {
  // Purpose: to sync state between upper and lower components.
  const dispatch = useDispatch();
  const Kolor = useSelector((state) => state.status.statusColor);

  useEffect(() => {
    dispatch(statusAction.getStatusColor())
      .then(async () => {
        // result would be undefined
        //console.log("2 status color:", Kolor);
      })
      .catch((err) => console.log(err));
  }, [Kolor]);

  const setStatusBlue = () => {
    dispatch(statusAction.setStatusBlue())
      .then(async () => {
        // result would be undefined
      })
      .catch((err) => console.log("error:", err));
  };
  const setStatusGreen = () => {
    dispatch(statusAction.setStatusGreen())
      .then(async () => {
        // result would be undefined
      })
      .catch((err) => console.log("error:", err));
  };
  return (
    <div>
      <p>Status Checker: 
      <button onClick={setStatusGreen} style={{background:"green",height:"15px", fontSize:".5em",color:"white",padding:"0 .5em 0 .5em"}}>Green</button>
      <button onClick={setStatusBlue} style={{background:"blue",height:"15px", fontSize:".5em",color:"white",padding:"0 .5em 0 .5em"}}>Blue</button>
      <button style={{ background: `${Kolor}`,height:"10px", fontSize:".5em",color:"white",padding:"0 .5em 0 .5em" }}></button>
      </p>
    </div>
  );
}
