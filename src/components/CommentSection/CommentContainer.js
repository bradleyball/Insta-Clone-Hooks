/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/**@jsx jsx */
import React from "react";
import Comment from "./Comment";
import AddComment from "./AddComment";
import { jsx, css } from "@emotion/core";

const commentWrapper = css`
  justify-items: flex-start;
  justify-self: flex-start;
  justify-content: flex-start;
  grid-template-rows: repeat(3, 1fr);
  display: grid;
  margin-left: 10px;
`;

function CommentContainer(props) {
  return (
    <div css={commentWrapper}>
      {props.data.comments.map(comment => (
        <Comment username={comment.username} text={comment.text} />
      ))}
      <AddComment data={props.data} />
    </div>
  );
}

export default CommentContainer;
