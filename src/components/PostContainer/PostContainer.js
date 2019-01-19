/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/**@jsx jsx */
import React from "react";
import PostHeader from "./PostHeader";
import PostPicture from "./PostPicture";
import PostIcons from "./PostIcons";
import CommentContainer from "../CommentSection/CommentContainer";
import { css, jsx } from "@emotion/core";

const styledPostContainer = css`
  display: grid;
  width: 550px;
  border: 1px solid black;
`;

const styledCommentContainer = css`
  display: grid;
  justify-content: flex-start;
`;

function PostContainer(props) {
  return (
    <div css={styledPostContainer}>
      <PostHeader data={props.data} />
      <PostPicture data={props.data} />
      <PostIcons
        data={props.data}
        addLike={props.addLike}
        setAddLike={props.setAddLike}
        searchData={props.searchData}
      />
      <div css={styledCommentContainer}>
        <CommentContainer
          data={props.data}
          searchData={props.searchData}
          setSearchData={props.setSearchData}
        />
      </div>
    </div>
  );
}

export default PostContainer;
