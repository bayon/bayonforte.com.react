import React from 'react';

const CreatePost = () => {

    return(
        <>
        <div>Create Post Component</div>
        //fields to create post 
        //when ready to POST it ... PAY. 
        <div>
        <ul>
          <li>
            DETAILS
            <ul>
              <li>See Contact Details and General Info of Individual Post</li>
              <li>Is the poster's info verified.</li>
              <li>Map of Posters location.</li>
              <li>Distance Poster is willing to travel.</li>
              <li>Image of Poster</li>
            </ul>
          </li>
          <li>
            ACTIONS:
            <ul>
              <li>
                Send Poster a request to :
                <ul>
                  <li>Get an Estimate</li>
                  <li>Collaborate on a job.</li>
                  <li>Leave comments on Experience or Service.</li>
                </ul>
              </li>
              <li>Search and Filter the list </li>
            </ul>
          </li>
        </ul>
      </div>
      </>
        
    )
}

export default CreatePost;