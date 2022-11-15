import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@material-ui/core";
import React from "react";
import "./GateUseSearch.css";

function Search({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(event.target.elements.filter.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="gateuse_search_box">
        <input name="filter" placeholder="검색하기" />
        <Button style={{ color: "skyblue" }}>
          <SearchIcon />
        </Button>
      </div>
    </form>
  );
}

export default Search;
