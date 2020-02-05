//import React from 'react';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Header from "./Header/Header.js"
import Listado from "./Listado/Listado.js"
import Body from "./Body/Body.js"
import Footer from "./Footer/Footer.js"
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
}
export default App;
