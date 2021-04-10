import Paper from "@material-ui/core/Paper";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as authAction from "../../redux/actions/authAction";
import PlainCard from "../cards/PlainCard";

const SearchPage = (props) => {
  var auth = useSelector((state) => state.auth.authorized);
  var users = useSelector((state) => state.auth.users);
  var haveUsers = useSelector((state) => state.auth.haveUsers);

  const dispatch = useDispatch();

  const [sortName, setSortName] = useState(false);
  const [sortEmail, setSortEmail] = useState(false);
  const [sortId, setSortId] = useState(false);
  const [sortZip, setSortZip] = useState(false);
  const [sortState, setSortState] = useState(false);
  const [noSort, setNoSort] = useState(true);

  console.log("Search Page reached ...props:", props);
  useEffect(() => {
    dispatch(authAction.allUsers())
      .then(async (result) => {
        console.log("ALL USERS RESULTS:", result);
        setSortName(false);
        setSortEmail(false);
        setSortId(false);
      })
      .catch((err) => console.log(err));
  }, []);
  if (!auth) {
    return <div>not authorized.</div>;
  }

  // const getAllUsers = () => {
  //   dispatch(authAction.allUsers())
  //     .then(async (result) => {
  //       console.log("result:", result);
  //     })
  //     .catch((err) => console.log(err));
  // };

  const sortByColor = (list) => {
    list
      .sort((a, b) => (a.color > b.color ? 1 : -1))
      .map((item, i) => console.log("item:" + item.color + "index" + i));
  };
  const sortBySize = (list) => {
    list
      .sort((a, b) => (a.size > b.size ? 1 : -1))
      .map((item, i) => console.log("item:" + item.size + "index" + i));
  };
  const list = [
    { color: "white", size: "XXL" },
    { color: "red", size: "XL" },
    { color: "black", size: "M" },
  ];
  sortByColor(list);
  sortBySize(list);

  const sortByFullName = (users) => {
    users
      .sort((a, b) => (a.fullName > b.fullName ? 1 : -1))
      .map((user, i) => {
        return <PlainCard user={user}></PlainCard>;
      });
  };

  return (
    <div>
      <Paper>
        <div>Users List</div>
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

        

        {haveUsers &&
          sortName &&
          users
            .sort((a, b) => (a.fullName > b.fullName ? 1 : -1))
            .map((user, i) => {
              return <PlainCard user={user}></PlainCard>;
            })}

        {haveUsers &&
          sortEmail &&
          users
            .sort((a, b) => (a.email > b.email ? 1 : -1))
            .map((user, i) => {
              return <PlainCard user={user}></PlainCard>;
            })}

        {haveUsers &&
          sortId &&
          users
            .sort((a, b) => (a._id > b._id ? 1 : -1))
            .map((user, i) => {
              return <PlainCard user={user}></PlainCard>;
            })}

        {haveUsers &&
          noSort &&
          users.map((user, i) => {
            return <PlainCard user={user}></PlainCard>;
          })}

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
