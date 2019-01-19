/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
/**@jsx jsx */
import React, { useState, useEffect } from "react";
import SearchBarContainer from "../SearchBar/SearchBarContainer";
import PostContainer from "./PostContainer";
import { jsx, css } from "@emotion/core";

const parentPostContainer = css`
  display: grid;
  grid-row-gap: 50px;
  justify-content: center;
`;

function PostPage(props) {
  const [searchData, setSearchData] = useState(props.data);
  const [addLike, setAddLike] = useState([]);

  useEffect(
    () => {
      setAddLike(Array(props.data.length).fill(false));
    },
    [props.data]
  );

  return (
    <div>
      <SearchBarContainer
        data={props.data}
        searchData={searchData}
        setSearchData={setSearchData}
      />

      <div css={parentPostContainer}>
        {searchData.map((dataOnMap, index) => {
          return (
            <PostContainer
              data={dataOnMap}
              addLike={addLike[index]}
              setAddLike={setAddLike}
              searchData={searchData}
              setSearchData={setSearchData}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PostPage;
