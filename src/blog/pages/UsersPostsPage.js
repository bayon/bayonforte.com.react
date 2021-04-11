import Paper from "@material-ui/core/Paper";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as postAction from "../../redux/actions/postAction";
import PostDisplayCard from "../cards/PostDisplayCard";


const UsersPostsPage = (props) => {
  var auth = useSelector((state) => state.auth.authorized);
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //var havePosts = useSelector((state) => state.post.havePosts); ???? 
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  const dispatch = useDispatch();

  const [currentPosts,setCurrentPosts] = useState([])
  const [haveCurrentPosts,setHaveCurrentPosts] = useState(false)

  const [sortName, setSortName] = useState(false);
  const [sortEmail, setSortEmail] = useState(false);
  const [sortId, setSortId] = useState(false);
  const [sortZip, setSortZip] = useState(false);
  const [sortState, setSortState] = useState(false);
  const [noSort, setNoSort] = useState(true); //true by default

  const [filterKey,setFilterKey] = useState('')

  const getDefaultPosts = () => {
    //Function needed to handle case where search input empty or a space.
    dispatch(postAction.allPosts())
    .then(async (result) => {
      console.log("ALL POSTS RESULTS FUNCTION:", result);
      setCurrentPosts(result)
      setHaveCurrentPosts(true)
    })
    .catch((err) => console.log(err));
  }

  const getFilteredPosts = (key) => {
    dispatch(postAction.filterPosts(key))
    .then(async (result) => {
      console.log(" --oo--  FILTERED POSTS RESULTS:", result);
      setCurrentPosts(result)
      setHaveCurrentPosts(true)
    })
    .catch((err) => console.log(err));
  }


  useEffect(() => {
    //initial gets all users once.
    dispatch(postAction.allPosts())
      .then(async (result) => {
        console.log("ALL POSTS RESULTS USEEFFECT:", result);
        setCurrentPosts(result)
        setHaveCurrentPosts(true)
      })
      .catch((err) => console.log(err));
   }, []);
   
  

  const sortByTitle = (posts) => {
    posts
      .sort((a, b) => (a.title > b.title ? 1 : -1))
      .map((post, i) => {
        return <PostDisplayCard key={i} post={post}></PostDisplayCard>;
      });
  };
  const clearSortOptions = () => {
    setSortName(false);
    setSortEmail(false);
    setSortId(false);
    setNoSort(false);
  };
  const setSortOption = (e) => {
    console.log(e.target.value);
    const key = e.target.value;
    clearSortOptions();
    switch (key) {
      case "id":
        setSortId(true);
        break;
      case "name":
        setSortName(true);
        break;
      case "email":
        setSortEmail(true);
        break;
      default:
        setNoSort(true);
        break;
    }
  };

  const setFilterOption = (e) => {

    setFilterKey(e.target.value);
    console.log('SETTING FILTER:');
    const key = e.target.value;
     
     
    if(key === '' || key === ' '){
       
      console.log('GET DEFAULT DATA BACK...')
      getDefaultPosts();
    }else{
      getFilteredPosts(key);
    }
    
  
  }

const displayPosts = () => {
    console.log("DISPALY POSTS.....")
   if(haveCurrentPosts){
    if( sortName){
      return(
        currentPosts
        .sort((a, b) => (a.title > b.title ? 1 : -1))
        .map((post, i) => {
          return <PostDisplayCard key={i} post={post}></PostDisplayCard>;
        })
      )
    } 
    if(sortEmail){
      return(
        currentPosts
        .sort((a, b) => (a.email > b.email ? 1 : -1))
        .map((post, i) => {
          return <PostDisplayCard key={i} post={post}></PostDisplayCard>;
        })
      )
     
    }
    if(sortId){
      return(
        currentPosts
        .sort((a, b) => (a._id > b._id ? 1 : -1))
        .map((post, i) => {
          return <PostDisplayCard key={i}  post={post}></PostDisplayCard>;
        })
      )

    }

    if(noSort){
      return(
        currentPosts.map((post, i) => {
          return <PostDisplayCard  key={i} post={post}></PostDisplayCard>;
        })
      )
    }
  }
 
   
}

if (!auth) {
  return <div>not authorized.</div>;
}
   

  return (
    <div>
      <Paper>
        <div>
          <span>
            Sort Options:
            <input
              type="radio"
              id="name"
              name="sortOption"
              value="name"
              onChange={setSortOption}
            />
            <label htmlFor="name">Name</label>
            <input
              type="radio"
              id="email"
              name="sortOption"
              value="email"
              onChange={setSortOption}
            />
            <label htmlFor="email">Email</label>
            <input
              type="radio"
              id="id"
              name="sortOption"
              value="id"
              onChange={setSortOption}
            />
            <label htmlFor="id">Id</label>
          </span>
        </div>
        <div>
          <span>Filter:
          
            <input
              type="text"
              id="filterKey"
              name="filterKey"
              onBlur={setFilterOption}
            />
            <button>displayPosts</button>
          </span>
        </div>
        {haveCurrentPosts && (<p>JACK HAS POSTS</p>)}
        {currentPosts && <p>Jack got some currentPosts.</p>}
        {haveCurrentPosts && displayPosts()}
 
       
      </Paper>
    </div>
  );
};

export default UsersPostsPage;

 
