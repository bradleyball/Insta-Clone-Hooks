/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/**@jsx jsx */
import React, { useState } from "react";
import { jsx, css } from "@emotion/core";

const styledSearchBar = css`
  width: 220px;
  height: 20px;
  border-radius: 5px;
  text-align: center;
  font-size: 0.9rem;
  font-weight: 600;
`;

function SearchBar(props) {
  const [inputSearch, setInputSearch] = useState("");

  const handleSearchBarChange = e => {
    if (e.target.name === "inputSearch") {
      searchPosts(e.target.value);
    }
  };

  const searchPosts = query => {
    const results = query
      ? props.data.filter(post => post.username.startsWith(query))
      : [...props.data];

    props.setSearchData(results);
    setInputSearch(query);
  };

  return (
    <form className="search">
      <input
        css={styledSearchBar}
        value={inputSearch}
        placeholder="🔍 Search"
        name="inputSearch"
        onChange={handleSearchBarChange}
      />
    </form>
  );
}

export default SearchBar;
