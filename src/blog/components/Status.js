import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as statusAction from "../../redux/actions/statusAction";


export default function Status() {
  // Purpose: to sync state between upper and lower components.
  const dispatch = useDispatch();
   const Kolor = useSelector((state) => state.status.statusColor);
  //const Kolor = useSelector((state) => state.post.statusColor);

  useEffect(() => {
    dispatch(statusAction.getStatusColor())
      .then(async () => {
        // result would be undefined
        console.log("2 status color:", Kolor);
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
      <p>COMPONENT Status</p>
      <button onClick={setStatusGreen}>Green L2</button>
      <button onClick={setStatusBlue}>Blue L2</button>
      <button style={{background:`${Kolor}`}}>color</button>
    </div>
  );
}
