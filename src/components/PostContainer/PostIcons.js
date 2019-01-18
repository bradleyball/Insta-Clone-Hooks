/* eslint-disable default-case */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/**@jsx jsx */
import React, { useState, useEffect } from "react";
import { jsx, css } from "@emotion/core";

const styledIconContainer = css`
  display: grid;
`;
const likeAndCommentIconContainer = css`
  justify-self: flex-start;
`;
const likeAndCommentIcons = css`
  height: 24px;
  width: 27px;
  margin: 8px 0px 8px 10px;
`;

const likesOnPost = css`
  font-size: 0.9rem;
  justify-self: flex-start;
  margin-left: 10px;
  margin-bottom: 2%;
`;

function PostIcons(props) {
  const toggleHeart = e => {
    const index = props.data.findIndex(
      post => post.username === e.target.dataset.username
    );

    const addLike = [...props.addLike];
    addLike.splice(index, 1, !addLike[index]);
    props.setAddLike({
      addLike
    });
  };

  const handleClick = e => {
    switch (e.target.dataset.button) {
      case "toggleHeart":
        toggleHeart(e);
        break;
    }
  };

  return (
    <div>
      <div css={styledIconContainer}>
        <div css={likeAndCommentIconContainer}>
          <img
            src={require(`../SearchBar/Images/largeHeart.png`)}
            alt=""
            css={likeAndCommentIcons}
            data-username={props.username}
            data-button="toggleHeart"
            onClick={handleClick}
          />
          <img
            src={require(`../SearchBar/Images/bubble.png`)}
            alt=""
            css={likeAndCommentIcons}
          />
        </div>

        <a href="#" css={likesOnPost}>
          {props.addLike ? props.data.likes + 1 : props.data.likes} likes
        </a>
      </div>
    </div>
  );
}

export default PostIcons;
