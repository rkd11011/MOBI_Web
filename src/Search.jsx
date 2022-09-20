import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import React from "react";
import "./Search.css";

function Search({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(event.target.elements.filter.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="search_box">
        <input name="filter" placeholder="검색하기"/>
          <button style={{ color: "skyblue" }}>
            <SearchOutlinedIcon />
          </button>
      </div>
    </form>
  );
}

export default Search;
