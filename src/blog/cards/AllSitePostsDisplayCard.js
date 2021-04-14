import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./card.css";

const AllSitePostsDisplayCard = (props) => {
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
    <div className="card-plain">
      <p className="cardDevNote">AllSitesDisplayCard</p>
      <Grid container direction="row">
        <Grid item xs={12} sm={3}>
          <Typography variant="p" component="p">
            {props.post.title}
          </Typography>
          {props.post.postType === "1" && <p>Looking For Work</p>}
          {props.post.postType === "2" && <p>Looking To Hire</p>}
          <p>{currentCategory} </p>
        </Grid>
        <Grid item xs={12} sm={3}>
          {seeDetails && (
            <>
              <div style={{ marginTop: 15 }}>
                <div>{props.post.description}</div>
                <a
                  href={"mailto:" + props.post.email}
                  style={{ color: "#222", textDecoration: "none" }}
                >
                  {props.post.email} <Icon>email</Icon>
                </a>
              </div>

              <div>{props.post.phone}</div>
              <div>{props.post.postImage}</div>
            </>
          )}
        </Grid>
        <Grid item xs={12} sm={3}>
          <img src={props.post.postImage} style={{height:"100px"}} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <button
            onClick={() => {
              setSeeDetails(!seeDetails);
            }}
          >
            {seeDetails ? "hide" : "details"}
          </button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AllSitePostsDisplayCard;
