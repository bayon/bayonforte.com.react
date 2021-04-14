import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { config } from "../../Constants";
import "./card.css";
import EditPostCard from "./EditPostCard";

const PostDisplayCard = (props) => {
  const [seeDetails, setSeeDetails] = useState(false);
  const [allowEdit, setAllowEdit] = useState(false);
  // const [inProgress, setInProgress] = useState(false);
  const HOST_URL = config.url.HOST_URL;
  console.log("PostDisplayCard - props:", props);
  console.log("HOST_URL:", HOST_URL);
  const closeEdit = () => {
    setAllowEdit(!allowEdit);
  };

  var user = useSelector((state) => state.auth.user);
  console.log("STATE---------user:", user);
  // useEffect(() => {
  //   setInProgress(inProgress);
  // }, [inProgress]);

  return (
    <Grid container spacing={0}>
            <p className="cardDevNote" >PostDisplayCard</p>

      <Grid item xs={12} sm={10}>
        <p>{props.post.title}</p>
      </Grid>
      <Grid item xs={12} sm={2}>
        <button
          onClick={() => {
            setSeeDetails(!seeDetails);
          }}
        >
          {seeDetails ? "close" : "details"}
        </button>
      </Grid>
      {seeDetails && (
        <Grid item xs={12} sm={12} style={{ background: "#eee" }}>
          <Grid container spacing={0} direction="row">
            <Grid item sm={10}>
              {!allowEdit && (
                <Grid
                  container
                  direction="row"
                  align="center"
                  justify="center"
                  style={{ textAlign: "left", padding: "10px" }}
                >
                  <Grid item xs={12} sm={10}>
                    <p className="cardDevNote">PostDisplayCard</p>
                    <p>{props.post.title}</p>
                    <p>{props.post.description}</p>
                    <div>
                      <a
                        href={"mailto:" + props.post.email}
                        style={{ color: "#222", textDecoration: "none" }}
                      >
                        {props.post.email}{" "}
                        <Icon className="cardIcon"  >email</Icon>
                      </a>
                    </div>

                    <div>
                      <a
                        href={"tel:" + props.post.phone}
                        style={{ color: "#222", textDecoration: "none" }}
                      >
                        {props.post.phone}
                        <Icon className="cardIcon" >phone</Icon>
                      </a>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    {/* <PostImageForm props={props}></PostImageForm> */}
                    <img
                      src={
                        `${HOST_URL}/public/images/` + user.data.profileImage
                      } //+ props.props.post.postImage
                      alt="img"
                      style={{
                        height: "50px",
                        width: "auto",
                        borderRadius: "5px",
                      }}
                    />
                  </Grid>
                </Grid>
              )}
            </Grid>
            <Grid item sm={2}>
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
                refresh={props.refresh}
              ></EditPostCard>
            </>
          )}
        </Grid>
      )}
    </Grid>
  );
};

export default PostDisplayCard;
