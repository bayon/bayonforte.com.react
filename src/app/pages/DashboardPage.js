import Grid from "@material-ui/core/Grid";
import React from "react";
import { useSelector } from "react-redux";
import { config } from "../../Constants";
import StatusChecker from "../components/StatusChecker";
import PostCreatePage from "./PostCreatePage";
import UsersPostsPage from "./UsersPostsPage";

const HOST_URL = config.url.HOST_URL;


export default function DashboardPage(props) {
  var auth = useSelector((state) => state.auth.authorized);
  var user = useSelector((state) => state.auth.user);


  if (!auth) {
    return <div>not authorized.</div>;
  }
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={10}>
          <h1>Dashboard</h1>
          <StatusChecker></StatusChecker>
        </Grid>
        <Grid item sm={2}>
          {auth && <p>Hello, {user.data.fullName}</p>}
          <img
              src={`${HOST_URL}/public/images/`+ user.data.profileImage } //+ props.props.post.postImage
              alt="img"
              style={{ height: "100px", width: "auto", borderRadius: "15px" }}
            />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <PostCreatePage></PostCreatePage>
        </Grid>
        <Grid item xs={12} sm={6}>
          <UsersPostsPage></UsersPostsPage>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
