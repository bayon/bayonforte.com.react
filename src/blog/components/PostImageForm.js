//THANKS TO: https://stackoverflow.com/questions/65176026/uploading-image-from-react-frontend-to-express-backend-and-displaying-it-back-in
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { config } from "../../Constants";
import * as postAction from "../../redux/actions/postAction";

const PostImageForm = (props) => {
  const dispatch = useDispatch();
  console.log("PROPS: ", props);

  const [file, setFile] = useState(null);
  // const [imgFile, setImgFile] = useState(null);
  //const [id, setId] = useState(props.props.post._id);
  var post = useSelector((state) => state.post);
  const handleFileChange = (event) => {
    setFile(event.target.files);
    console.log(file);
  };

  const API_URL = config.url.API_URL;
  const HOST_URL = config.url.HOST_URL;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) {
      return false;
    }
    const data = new FormData();
    data.append("_id", props.props.post._id);
    for (var x = 0; x < file.length; x++) {
      data.append("file", file[x]);
    }
    axios.post(`${API_URL}/upload`, data).then((res) => {
      // setImgFile(`${HOST_URL}/public/images/` + res.data);
      const postImage = res.data;
      post.data.postImage = postImage;
      const values = post.data;
      dispatch(postAction.updatePost(values))
        .then(async (result) => {
          if (result.success) {
            //code
          }
          props.props.refresh();
        })
        .catch((err) => console.log(err));
    });
  };

  return (
    <Grid
      container
      spacing={0}
      align="center"
      justify="center"
      direction="column"
    >
      <form name="fileinfo" encType="multipart/form-data">
        <Grid xs={12}>
          {/* {imgFile && (
              
                <img
                  src={imgFile}
                  alt="img"
                  style={{
                    height: "100px",
                    width: "auto",
                    borderRadius: "15px",
                  }}
                />
              
            )}   */}

          {
            <img
              src={`${HOST_URL}/public/images/` } //+ props.props.post.postImage
              alt="img"
              style={{ height: "200px", width: "auto", borderRadius: "15px" }}
            />
          }
        </Grid>

        <Grid xs={12}>
          <input
            name="postImage"
            type="file"
            id="file"
            accept=".jpg"
            multiple
            onChange={handleFileChange}
            style={{ outline: "none", border: "none" }}
          />
        </Grid>
        <Grid xs={12}>
          <button className="btn btn-primary mt-3" onClick={handleSubmit}>
            Change Post Image
          </button>
        </Grid>
      </form>
    </Grid>
  );
};

export default PostImageForm;