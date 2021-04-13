import Grid from "@material-ui/core/Grid";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as authAction from "../../redux/actions/authAction";
import PostCreatePage from "./PostCreatePage";
import UsersPostsPage from "./UsersPostsPage";

export default function DashboardPage(props) {
  var auth = useSelector((state) => state.auth.authorized);
  const [user, setUser] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authAction.userProfile())
      .then(async (result) => {
        console.log("result:", result);
        setUser(result.data);
      })
      .catch((err) => console.log(err));
  }, [auth]);

  if (!auth) {
    return <div>not authorized.</div>;
  }
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={10}>
          <h1>Dashboard</h1>
          <span>
            PostCreatePage
            <ul>
              <li>PostCreateCard</li>
            </ul>
            UsersPostPage
            <ul>
              <li>PostDisplayCard
                <ul>
                  <li>
                    EditPostCard
                  </li>
                </ul>
              </li>
            </ul>
          </span>
        </Grid>
        <Grid item sm={2}>
          {auth && <p>Hello, {user.fullName}</p>}
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
