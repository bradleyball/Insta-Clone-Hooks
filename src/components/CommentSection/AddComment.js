/* eslint-disable no-unused-vars */
/**@jsx jsx */
import React, { useState } from "react";
import { jsx, css } from "@emotion/core";

const styledAddComment = css`
  border: none;
  justify-self: flex-start;
  width: 500px;
  margin-bottom: 10px;
  margin-top: 3%;
  height: 20px;
  border-top: 1px solid lightgray;
`;

function AddComment(props) {
  const [commentInputText, setCommentInputText] = useState("");

  const handleCommentInputText = e => {
    setCommentInputText(e.target.value);
  };

  const addComment = (e, username) => {
    e.preventDefault();

    let searchData = props.searchData.map(post => {
      if (post.username === username) {
        post.comments.push({
          username: username,
          text: commentInputText
        });
      }
      return post;
    });

    setCommentInputText("");
    props.setSearchData(props.searchData);
  };

  return (
    <form onSubmit={e => addComment(e, props.data.username)}>
      <input
        type="text"
        name="commentInputText"
        placeholder="Add a Comment..."
        value={commentInputText}
        onChange={handleCommentInputText}
        css={styledAddComment}
      />
    </form>
  );
}

export default AddComment;
