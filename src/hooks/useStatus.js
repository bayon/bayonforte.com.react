import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as statusAction from "../../redux/actions/statusAction";


const useStatus = () => {                //<----Input
  const [kolor, setKolor] = useState([])                //<----Output
  const dispatch = useDispatch();
  const Kolor = useSelector((state) => state.status.statusColor);

   useEffect(() => {
    dispatch(statusAction.getStatusColor())
      .then(async () => {
        // result would be undefined
        console.log("hook status color:", Kolor);
        setKolor(Kolor)
      })
      .catch((err) => console.log(err));
  }, [Kolor]);

   
  const setStatusBlue = () => {
    dispatch(statusAction.setStatusBlue())
      .then(async () => {
        // result would be undefined
      })
      .catch((err) => console.log("hook error:", err));
  };
  const setStatusGreen = () => {
    dispatch(statusAction.setStatusGreen())
      .then(async () => {
        // result would be undefined
      })
      .catch((err) => console.log("hook error:", err));
  };
  //kolor,setStatusBlue,
  return [kolor,setStatusBlue,setStatusGreen]; //Returning the outputs
};

export default useStatus;