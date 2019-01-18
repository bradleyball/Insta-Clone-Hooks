/* eslint-disable default-case */
import React, { useState } from "react";

function Login(props) {
  const [inputUsername, setinputUsername] = useState("");
  const [inputPassword, setinputPassword] = useState("");

  const handleLoginChange = e => {
    [e.target.name] === "inputUsername"
      ? setinputUsername({
          [e.target.name]: e.target.value
        })
      : setinputPassword({
          [e.target.name]: e.target.value
        });
  };

  const handleSubmit = e => {
    switch (e.target.name) {
      case "loginForm":
        this.loginUser();
    }
  };

  return (
    <div className="login-form-wrapper">
      <form onSubmit={handleSubmit} name="loginForm" className="login-form">
        username:
        <input
          className="login-input"
          type="text"
          name="inputUsername"
          value={inputUsername}
          onChange={handleLoginChange}
        />
        <br />
        password:
        <input
          className="login-input"
          type="text"
          name="inputPassword"
          value={inputPassword}
          onChange={handleLoginChange}
        />
        <button className="login-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
