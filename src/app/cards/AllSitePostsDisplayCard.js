import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { config } from "../../Constants";
import "./card.css";

const AllSitePostsDisplayCard = (props) => {
  const HOST_URL = config.url.HOST_URL;
  var auth = useSelector((state) => state.auth.authorized);
  var user = useSelector((state) => state.auth.user);

  const [seeDetails, setSeeDetails] = useState(false);

  const [inProgress, setInProgress] = useState(false);

  const categories = useSelector((state) => state.post.categories);
  const [currentCategory, setCurrentCategory] = useState("");

  console.log("inProgress:", inProgress);
  useEffect(() => {
    setInProgress(inProgress);
  }, [inProgress]);

  useEffect(() => {
    setCurrentCategory(categories[parseInt(props.post.category)]);
  }, []);

  return (
    <>
      <Grid container direction="row" className="card-plain">
        <Grid item xs={12} sm={3}>
          <p className="cardTitle">{props.post.title}</p>

          {props.post.postType === "1" && (
            <p classname="cardPostType">"Looking For Work" </p>
          )}
          {props.post.postType === "2" && (
            <p classname="cardPostType">"Hiring" </p>
          )}

          <p className="cardCategory">{currentCategory} </p>
        </Grid>
        <Grid item xs={12} sm={3} style={{ border: "dotted 1px red" }}>
          {seeDetails && (
            <>
              <Grid item xs={12} style={{ border: "dotted 1px blue" }}>
                <div className="cardDescription">{props.post.description}</div>
                <div className="cardContactInfo">
                  <a
                    href={"mailto:" + props.post.email}
                    style={{ color: "#222", textDecoration: "none" }}
                  >
                    {props.post.email} <Icon className="cardIcon">email</Icon>
                  </a>
                </div>

                <div className="cardContactInfo">
                  <a
                    href={"tel:" + props.post.phone}
                    style={{ color: "#222", textDecoration: "none" }}
                  >
                    {props.post.phone}
                    <Icon className="cardIcon">phone</Icon>
                  </a>
                </div>
              </Grid>
            </>
          )}
        </Grid>
        <Grid item xs={12} sm={3} style={{ border: "dotted 1px orange" }}>
          
            {/* <PostImageForm props={props}></PostImageForm> */}
            <img
              src={`${HOST_URL}/public/images/` + props.post.postImage} //+ props.props.post.postImage
              alt="img"
              className="cardImg"
            />
           
        </Grid>
        <Grid item xs={12} sm={1} style={{ border: "dotted 1px purple" }}>
          <button
            onClick={() => {
              setSeeDetails(!seeDetails);
            }}
          >
            {seeDetails ? "hide" : "details"}
          </button>
        </Grid>
      </Grid>
      <p className="cardDevNote">AllSitesDisplayCard</p>
    </>
  );
};

export default AllSitePostsDisplayCard;
