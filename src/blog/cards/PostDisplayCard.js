import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import React, { useEffect, useState } from "react";
import "./card.css";
import EditPostCard from "./EditPostCard";

const PostDisplayCard = (props) => {
  const [seeDetails, setSeeDetails] = useState(false);
  const [allowEdit, setAllowEdit] = useState(false);
  const [inProgress, setInProgress] = useState(false);

  console.log("inProgress:", inProgress);
  useEffect(() => {
    setInProgress(inProgress);
  }, [inProgress]);

  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <Typography variant="h5" component="h2">
          {props.post.title}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <button
          onClick={() => {
            setSeeDetails(!seeDetails);
          }}
        >
          {seeDetails ? "hide" : "details"}
        </button>
      </Grid>
      {seeDetails && (
        <Grid item xs={12} sm={12} style={{ background: "#eee" }}>
          {!allowEdit && (
            <>
              <div style={{ marginTop: 15 }}>
                <a
                  href={"mailto:" + props.post.email}
                  style={{ color: "#222", textDecoration: "none" }}
                >
                  {props.post.email} <Icon>email</Icon>
                </a>
              </div>
              <div>{props.post.description}</div>
              <div>{props.post.phone}</div>
            </>
          )}
           <button
            onClick={() => {
              setAllowEdit(!allowEdit);
            }}
          >
            {allowEdit 
            ? ("switch out with create button") 
            : ("edit")
            }
          </button>
          {allowEdit &&
          (
            <>
            <p>NEED: prepopulated data, the 'create' button to toggle form as well as save by post_id</p>
            <EditPostCard data={props.post}></EditPostCard>
            </>
          )

          }
         
        </Grid>
      )}
    </Grid>
  );
};

export default PostDisplayCard;
