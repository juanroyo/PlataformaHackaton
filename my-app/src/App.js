import React, { Component } from "react";
import './App.css';
import Basic from "./Footer/basic.js";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Basic />
      </div>
    );
  }
}

export default App;
