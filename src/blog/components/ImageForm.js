
//THANKS TO: https://stackoverflow.com/questions/65176026/uploading-image-from-react-frontend-to-express-backend-and-displaying-it-back-in 

import axios from "axios";
import React, { useState } from 'react';

const ImageForm = () => {

const [file, setFile] = useState(null);
const [imgFile, setImgFile] = useState(null);


const handleFileChange = (event) => {
    setFile(event.target.files);
    console.log(file)
}


const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData();
    for(var x = 0; x<file.length; x++) {
        data.append('file', file[x])
    }
    axios.post("http://localhost:4000/api/upload", data)
    .then(res => { 
        console.log('res:',res)
        console.log('data:',data)
       // console.log('res.data:',res.data);
        //console.log(res.statusText)
        setImgFile('http://localhost:4000/public/images/'+res.data)

      })
}

return ( 
    <div>
       <form >
        <div className="form-group" >

            <label htmlFor="file">Upload File:</label>
            <input 
            className="form-control-file mb-3" 
            type="file" id="file" 
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
       
       <img src={imgFile} alt="img"/>
       }

       {/* Display Image Here */}
    </div>
 );
}

export default ImageForm;
 