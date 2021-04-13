import { Typography } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import React, { useEffect, useState } from "react";
import "./card.css";

const AllSitePostsDisplayCard = (props) => {
  const [seeDetails, setSeeDetails] = useState(false);

  const [inProgress, setInProgress] = useState(false);
  console.log("inProgress:", inProgress);
  useEffect(() => {
    setInProgress(inProgress);
  }, [inProgress]);

  return (
    <div className="card-plain"  >
            <p className="cardDevNote" >AllSitesDisplayCard</p>

        <span>
      <Typography variant="p" component="p">
        {props.post.title}
      </Typography>
      
        {props.post.postType === "1" && <p>Looking For Work</p>}
        {props.post.postType === "2" && <p>Looking To Hire</p>}
      

      <button
        onClick={() => {
          setSeeDetails(!seeDetails);
        }}
      >
        {seeDetails ? "hide" : "details"}
      </button>
      </span>
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
          <div>{props.post.profileImage}</div>
        </>
      )}
    </div>
  );
};

export default AllSitePostsDisplayCard;
