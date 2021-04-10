import Paper from "@material-ui/core/Paper";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as authAction from "../../redux/actions/authAction";
import PlainCard from "../cards/PlainCard";

const SearchPage = (props) => {
  var auth = useSelector((state) => state.auth.authorized);
  //var users = useSelector((state) => state.auth.users);
  var haveUsers = useSelector((state) => state.auth.haveUsers);
  const dispatch = useDispatch();

// LEFT OFF HERE MESSING WITH CURRENT USERS REPLACING USERS AND THE FILTER>>>>>>>!!!!!! 
  const [currentUsers,setCurrentUsers] = useState([])

  const [sortName, setSortName] = useState(false);
  const [sortEmail, setSortEmail] = useState(false);
  const [sortId, setSortId] = useState(false);
  const [sortZip, setSortZip] = useState(false);
  const [sortState, setSortState] = useState(false);
  const [noSort, setNoSort] = useState(true); //true by default

  const [dataChanged,setDataChanged] = useState(false);
  const [filterKey,setFilterKey] = useState('')

  const getDefaultUsers = () => {
    dispatch(authAction.allUsers())
    .then(async (result) => {
      console.log("ALL USERS RESULTS:", result);
      setCurrentUsers(result)
    })
    .catch((err) => console.log(err));
  }

  const getFilteredUsers = (key) => {
    dispatch(authAction.filterUsers(key))
    .then(async (result) => {
      console.log(" --oo--  FILTERED USERS RESULTS:", result);
      setCurrentUsers(result)
    })
    .catch((err) => console.log(err));
  }


  useEffect(() => {
    dispatch(authAction.allUsers())
      .then(async (result) => {
        console.log("ALL USERS RESULTS:", result);
        setCurrentUsers(result)
      })
      .catch((err) => console.log(err));
    //getDefaultUsers();
  }, []);
  //dataChanged
  // useEffect(()=> {
  //   dispatch(authAction.filterUsers(filterKey))
  //   .then(async (result) => {
  //     console.log("----- FILTERED USERS RESULTS:", result);
  //     setCurrentUsers(result)
  //   })
  //   .catch((err) => console.log(err));

 
  // },[filterKey])
 
// const filterTheUsers = () => {
//   dispatch(authAction.filterUsers(filterKey))
//   .then(async (result) => {
//     console.log("----- FILTERED USERS RESULTS:", result);
//     setCurrentUsers(result)
//   })
//   .catch((err) => console.log(err));
// }
  

  const sortByFullName = (users) => {
    users
      .sort((a, b) => (a.fullName > b.fullName ? 1 : -1))
      .map((user, i) => {
        return <PlainCard user={user}></PlainCard>;
      });
  };
  const clearSortOptions = () => {
    //SET SORT OPTIONS HERE:
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
     
     
    if(key == '' || key == ' '){
       
      console.log('GET DEFAULT DATA BACK...')
      getDefaultUsers();
    }else{
      setDataChanged(true)
      getFilteredUsers(key);
    }
    
  
  }

const displayUsers = () => {
   if(haveUsers){
    if( sortName){
      return(
        currentUsers
        .sort((a, b) => (a.fullName > b.fullName ? 1 : -1))
        .map((user, i) => {
          return <PlainCard user={user}></PlainCard>;
        })
      )
    } 
    if(sortEmail){
      return(
        currentUsers
        .sort((a, b) => (a.email > b.email ? 1 : -1))
        .map((user, i) => {
          return <PlainCard user={user}></PlainCard>;
        })
      )
     
    }
    if(sortId){
      return(
        currentUsers
        .sort((a, b) => (a._id > b._id ? 1 : -1))
        .map((user, i) => {
          return <PlainCard user={user}></PlainCard>;
        })
      )

    }

    if(noSort){
      return(
        currentUsers.map((user, i) => {
          return <PlainCard user={user}></PlainCard>;
        })
      )
    }
  }
  if(dataChanged){
    console.log("D A T A   C H A N G E D   ! ! ! !")
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
            <button>search</button>
          </span>
        </div>

        {haveUsers && displayUsers()}
        {/* {dataChanged && displayUsers()} */}

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
      </Paper>
    </div>
  );
};

export default SearchPage;

/*
  const myData = [].concat(users).sort( (a, b) => a.fullName > b.fullName ? 1 : -1)
          .map((item, i) => 
              <div key={i}> {item.fullName} {item.email}{item.phone}</div>
          );
          */
