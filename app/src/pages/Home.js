import React from "react";
import AddPost from "./AddPost";
import ListPost from "./ListPost";

class Home extends React.Component {
  render() {
    return (
      <div>
        <AddPost />
        <ListPost />
      </div>
    );
  }
}
export default Home;
