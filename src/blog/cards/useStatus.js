import { useEffect, useState } from 'react';
//
import { useDispatch, useSelector } from "react-redux";
import * as statusAction from "../../redux/actions/statusAction";



//
const useVideos = (defaultSearchTerm) => {                //<----Input
  const [videos, setVideos] = useState([])                //<----Output
  
  const [kolor, setKolor] = useState([])                //<----Output
  const dispatch = useDispatch();
  const Kolor = useSelector((state) => state.status.statusColor);



  useEffect(() => {
    search(defaultSearchTerm);
  },[])

  // useEffect(() => {
  //   dispatch(statusAction.getStatusColor())
  //     .then(async () => {
  //       // result would be undefined
  //       console.log("hook status color:", Kolor);
  //       //setKolor(Kolor)
  //     })
  //     .catch((err) => console.log(err));
  // }, [Kolor]);
  
  const search = async (term) => {                  //<----Ouput
    // const response = await youtube.get('/search',{
    //   params: {
    //     q: term,
    //   },
    // });
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
    setVideos(term + " altered")
    if(term === "blue"){
        setStatusBlue();
    }
    if(term === "green"){
        setStatusGreen();
    }

  };
  return [videos,search]; //Returning the outputs
};

export default useVideos;