/* eslint-disable no-useless-constructor */
/* eslint-disable default-case */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import PostPage from "../src/components/PostContainer/PostPage";
import dummyData from "./dummy-data";
import "./globalstyles";

// function App(props) {
//   return <PostPage data={props.data} />;
// }

// export default App;
function App(props) {
  //React Hook State
  const [data, setData] = useState(dummyData);

  //storing data to my local storage. (React Hooks syntax for ComponentDidMount())
  // useEffect(
  //   () => {
  //     const data = JSON.parse(localStorage.getItem("data")) || dummyData;
  //     setData({ data: [...data] }, () => {
  //       localStorage.setItem("data", JSON.stringify(data));
  //     });
  //   },
  //   [dummyData]
  // );

  // const [currentUser, setCurrentUser] = useState("");
  // useEffect(() => {
  //   const currentUser = JSON.parse(localStorage.getItem("currentUser")) || "";
  //   setCurrentUser(
  //     { currentUser: currentUser },
  //     () => {
  //       localStorage.setItem("currentUser", JSON.stringify(currentUser));
  //     },
  //     [dummyData]
  //   );
  // });

  return (
    <div>
      <PostPage data={data} />
    </div>
  );
  //conditional statement to decide which page to render
  // return !this.state.currentUser ? (
  //   <Login data={data} currentUser={currentUser} />
  // ) : (
  //   <App data={data} />
  // );
}
export default App;
