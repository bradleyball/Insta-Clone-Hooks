/* eslint-disable default-case */
/* eslint-disable no-useless-constructor */
// import React, { useState, useEffect } from "react";
// import dummyData from "../../dummy-data";
// import App from "../../App";

// export const authenticate = App => Login =>
//   function auth(props) {
//     //React Hook State
//     const [data, setData] = useState([]);

//     //storing data to my local storage. (React Hooks syntax for ComponentDidMount())
//     useEffect(() => {
//       const vdata = JSON.parse(localStorage.getItem("data")) || dummyData;
//       setData({ data: [...vdata] }, () => {
//         localStorage.setItem("data", JSON.stringify(data));
//       });
//     });

//     const [currentUser, setCurrentUser] = useState("");
//     useEffect(() => {
//       const vcurrentUser =
//         JSON.parse(localStorage.getItem("currentUser")) || "";
//       setCurrentUser({ currentUser: vcurrentUser }, () => {
//         localStorage.setItem("currentUser", JSON.stringify(currentUser));
//       });
//     });
//     //conditional statement to decide which page to render
//     return !this.state.currentUser ? (
//       <Login data={data} currentUser={currentUser} />
//     ) : (
//       <App data={data} />
//     );
//   };
