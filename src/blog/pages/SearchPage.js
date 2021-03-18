import React from "react";
import { useSelector } from "react-redux";

const SearchPage = (props) => {
  var auth = useSelector((state) => state.auth.authorized);

  console.log("Search Page reached or what? props:", props);

  if(!auth){
    return(<div>not authorized.</div>)
  }

  return (
    <div>
      <div>SearchPage</div>
      <div>List of All Records that Match Filter</div>
    </div>
  );
};

export default SearchPage;

// Colby Palmer6:56 PM
// https://withkoji.com/community
// colby@withkoji.com