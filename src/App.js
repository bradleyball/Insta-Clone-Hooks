/* eslint-disable no-useless-constructor */
/* eslint-disable default-case */
// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import PostPage from "../src/components/PostContainer/PostPage";
import { authenticate } from "./components/authentication/authenticate";
import Login from "../src/components/Login/Login";
import "./globalstyles";

function App(props) {
  return <PostPage data={props.data} />;
}

export default authenticate(App)(Login);
