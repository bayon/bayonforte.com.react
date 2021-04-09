
//THANKS TO: https://stackoverflow.com/questions/65176026/uploading-image-from-react-frontend-to-express-backend-and-displaying-it-back-in 
import axios from "axios";
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { config } from "../../Constants";
import * as authAction from "../../redux/actions/authAction";


const ImageForm = (props) => {

    const dispatch = useDispatch();
    console.log('PROPS: ',props)

const [file, setFile] = useState(null);
const [imgFile, setImgFile] = useState(null);
//const [id, setId] = useState(props.props.user._id);
  var user = useSelector((state) => state.auth.user);
const handleFileChange = (event) => {
    setFile(event.target.files);
    console.log(file)
}

const API_URL = config.url.API_URL;
const HOST_URL = config.url.HOST_URL;

const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('id? event.target.name:',event.target.name)
    const data = new FormData();
    data.append('_id',props.props.user._id);
    data.append('jack','foopoo')
    for( var x = 0; x < file.length; x++ ) {
        data.append('file', file[x])
    }
    
     console.log('user right:',user)
     
    axios.post(`${API_URL}/upload`, data)
    .then(res => { 
        console.log('res:',res)
        // console.log('res.data:',res.data);
        //console.log(res.statusText)
        //add auth-token to header ? 
        setImgFile(`${HOST_URL}/public/images/`+res.data)
         //NEED TO SAVE THE UPLOADED IMAGE (name) to the users db record. 
         const profileImage = res.data;
            //console.log('profileImage:',profileImage);
           // console.log('user:',user);
            //console.log(user.data) 
            user.data.profileImage = profileImage 
            //console.log('added something ... ')
            console.log(user.data) 
            
        const values = user.data
        console.log('values:', values); 
         dispatch(authAction.updateUser(values))
         .then(async (result) => {
           console.log("update PROFILE IMAGE result:", result);

           //setTimeout(() => setLoading(false), 3000);
           if (result.success) {
             //setInProgress(true);
             //setLoading(false)
             console.log('success PERHAPS MAYBE !!!!!')
           }
           props.refresh();
         })
         .catch((err) => console.log(err));
        /*

values: 
{fullName: "Bayon Forte", email: "z@z.com", phone: "812-267-0593"}
email: "z@z.com"
fullName: "Bayon Forte"
phone: "812-267-0593"
        */

      })
}

return ( 
    <div>
       <form name="fileinfo" enctype="multipart/form-data" >
        <div className="form-group" >

            <label htmlFor="file">Profile Image</label>
            <input 
             type="file" 
            id="file" 
            accept=".jpg"
             multiple
            onChange={handleFileChange}
             />
          
             <button 
            className="btn btn-primary mt-3" 
            onClick={handleSubmit}
             >Upload</button>
        </div>
       </form>
       {imgFile &&
       <>
       <img src={imgFile} alt="img" style={{height:"100px",width:"auto",borderRadius:"15px"}}/>
        </>
       }
       {props.props.user.profileImage && 

    <img src={`${HOST_URL}/public/images/`+props.props.user.profileImage} alt="img" style={{height:"200px",width:"auto",borderRadius:"15px"}}/>
       }


       {/* Display Image Here */}
    </div>
 );
}

export default ImageForm;
 