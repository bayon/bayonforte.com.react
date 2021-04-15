import Grid from "@material-ui/core/Grid";
import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import styled from "styled-components";
import { config } from "../../../Constants";
import PostCreateCard from "../../cards/PostCreateCard";
import PostStepTwo from "./PostStepTwo";
const HOST_URL = config.url.HOST_URL;
const LinkStyle = styled.section`
  padding: 0.3em;
  height: 35px;
  background: #fff;
  color: #333;
`;

const PostStepOne = () => {
  var auth = useSelector((state) => state.auth.authorized);
  var user = useSelector((state) => state.auth.user);

  return (
    <>
      Post Step 1
      {!auth && <div>Not Authorized.</div>}
      {auth && <div>Authorized</div>}
      <Router>
        <Grid item xs={12} sm={12}>
            <PostCreateCard></PostCreateCard>
          <Link
            style={{
              textDecoration: "none",
            }}
            to="/postStepTwo"
          >
            <LinkStyle>Step 2</LinkStyle>
          </Link>

        </Grid>

        <Route path="/postStepTwo" component={PostStepTwo}  />
      </Router>
    </>
  );
};

export default PostStepOne;
 