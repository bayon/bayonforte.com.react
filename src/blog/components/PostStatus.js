import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as postAction from "../../redux/actions/postAction";


export default function PostStatus() {
  // Purpose: to sync state between upper and lower components.
  const dispatch = useDispatch();
   const Kolor = useSelector((state) => state.post.statusColor);
  //const Kolor = useSelector((state) => state.post.statusColor);

  useEffect(() => {
    dispatch(postAction.getStatusColor())
      .then(async () => {
        // result would be undefined
        console.log("2 status color:", Kolor);
      })
      .catch((err) => console.log(err));
  }, [Kolor]);

  // const setStatusBlue = () => {
  //   dispatch(postAction.setStatusBlue())
  //     .then(async () => {
  //       // result would be undefined
  //     })
  //     .catch((err) => console.log("error:", err));
  // };
  // const setStatusGreen = () => {
  //   dispatch(postAction.setStatusGreen())
  //     .then(async () => {
  //       // result would be undefined
  //     })
  //     .catch((err) => console.log("error:", err));
  // };
  return (
    <div>
      <p>COMPONENT Status</p>
      
      <button style={{background:`${Kolor}`}}>color</button>
    </div>
  );
}
