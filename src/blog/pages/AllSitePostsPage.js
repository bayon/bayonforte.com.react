import Paper from "@material-ui/core/Paper";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as postAction from "../../redux/actions/postAction";
import AllSitePostsDisplayCard from "../cards/AllSitePostsDisplayCard";


const AllSitePostsPage = (props) => {
  var auth = useSelector((state) => state.auth.authorized);
  

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
    dispatch(postAction.allSitePosts())
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
    dispatch(postAction.allSitePosts())
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
        return <AllSitePostsDisplayCard key={i} post={post}></AllSitePostsDisplayCard>;
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
          return <AllSitePostsDisplayCard key={i} post={post}></AllSitePostsDisplayCard>;
        })
      )
    } 
    if(sortEmail){
      return(
        currentPosts
        .sort((a, b) => (a.email > b.email ? 1 : -1))
        .map((post, i) => {
          return <AllSitePostsDisplayCard key={i} post={post}></AllSitePostsDisplayCard>;
        })
      )
     
    }
    if(sortId){
      return(
        currentPosts
        .sort((a, b) => (a._id > b._id ? 1 : -1))
        .map((post, i) => {
          return <AllSitePostsDisplayCard key={i}  post={post}></AllSitePostsDisplayCard>;
        })
      )

    }

    if(noSort){
      return(
        currentPosts.map((post, i) => {
          return <AllSitePostsDisplayCard  key={i} post={post}></AllSitePostsDisplayCard>;
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

            <input
              type="radio"
              id="latest"
              name="sortOption"
              value="latest"
              onChange={setSortOption}
            />
            <label htmlFor="latest">Latest</label>

            <input
              type="radio"
              id="category1"
              name="sortOption"
              value="category1"
              onChange={setSortOption}
            />
            <label htmlFor="category1">Looking For Work</label>
            <input
              type="radio"
              id="category2"
              name="sortOption"
              value="category2"
              onChange={setSortOption}
            />
            <label htmlFor="category2">Looking To Hire</label>

            
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
            <button>Search</button>
          </span>
        </div>
      
        {haveCurrentPosts && displayPosts()}
 
       
      </Paper>
    </div>
  );
};

export default AllSitePostsPage;

 
