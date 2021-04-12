import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import React, { useEffect, useState } from "react";
import "./card.css";
import EditPostCard from "./EditPostCard";

const PostDisplayCard = (props) => {
  const [seeDetails, setSeeDetails] = useState(false);
  const [allowEdit, setAllowEdit] = useState(false);
  const [inProgress, setInProgress] = useState(false);

  const closeEdit = () => {
    setAllowEdit(!allowEdit);
  };

  console.log("inProgress:", inProgress);
  useEffect(() => {
    setInProgress(inProgress);
  }, [inProgress]);

  return (
    <Grid container spacing={0}>
      <Grid item xs={12} sm={10} style={{ border: "solid orange 1px" }}>
        <p>{props.post.title}</p>
      </Grid>
      <Grid item xs={12} sm={2} style={{ border: "solid blue 1px" }}>
        <button
          onClick={() => {
            setSeeDetails(!seeDetails);
          }}
        >
          {seeDetails ? "close" : "details"}
        </button>
      </Grid>
      {seeDetails && (
        <Grid
          item
          xs={12}
          sm={12}
          style={{ background: "#eee", border: "solid red 1px" }}
        >
          <Grid container spacing={0}>
            <Grid item sm={10} style={{ border: "solid 1px blue" }}>
              {!allowEdit && (
                <div style={{textAlign:"left",padding:"10px"}}>
                  <div>
                    <a
                      href={"mailto:" + props.post.email}
                      style={{ color: "#222", textDecoration: "none" }}
                    >
                      {props.post.email} <Icon style={{fontSize:".8em"}}>email</Icon>
                    </a>
                  </div>
                  <div>{props.post.description}</div>
                  <div>{props.post.phone}</div>
                </div>
              )}
            </Grid>
            <Grid item sm={2} style={{ border: "solid 1px yellow" }}>
              {!allowEdit && (
                <button
                  onClick={() => {
                    setAllowEdit(!allowEdit);
                  }}
                  style={{ color: "blue" }}
                >
                  Edit
                </button>
              )}
            </Grid>
          </Grid>
          {allowEdit && (
            <>
              <EditPostCard
                data={props.post}
                closeEdit={closeEdit}
              ></EditPostCard>
            </>
          )}
        </Grid>
      )}
    </Grid>
  );
};

export default PostDisplayCard;
