import React, { Component } from "react";

import "./App.css";
import Header from "./pages/Header";


class App extends Component {
  state = {
    response: "",
    post: "",
    responseToPost: ""
  };

  render() {
    return (
      <div className="App">
        <div>
          <Header />
        </div>
        
      </div>
    );
  }
}

export default App;
