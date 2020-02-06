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
import Footer from "./Footer/footer.js"
import Basic from "./Form/basic.js";
import MyProvider from "./provider.js"
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
  return (
    <MyProvider>
    <Router>
    <div>
      <Header />
      <Switch>
        <Route path="/listado" component={Listado} />
        <Route path="/body" component={Body} />
        <Route path="/basic" component={Basic} />
      </Switch>
      <Footer />
    </div>
    </Router>
    </MyProvider>
  );

}
}
export default App;
