import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';import React from "react";

function Search({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(event.target.elements.filter.value);
  };

  return (
    <form onSubmit={handleSubmit}>
    <div className="search_icon">
      <input name="filter" />
      <button style={{ color: "skyblue" }}><SearchOutlinedIcon /></button>
      </div>
    </form>
  );
}

export default Search;
