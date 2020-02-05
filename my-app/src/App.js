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
import Basic from "./Footer/basic.js";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
  return (
    <Router>
    <div>
      <Header />
      <Switch>
        <Route path="/listado" component={Listado} />
        <Route path="/body" component={Body} />
      </Switch>
      <Basic />
      <Footer />
    </div>
    </Router>
  );

}
}
export default App;
