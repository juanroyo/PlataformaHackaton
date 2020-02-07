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
import BooksContext from "./provider.js"
import Header from "./Header/Header.js"
import Listado from "./Listado/Listado.js"
import Body from "./Body/Body.js"
import Footer from "./Footer/footer.js"
import Basic from "./Form/basic.js";
import Page from "./Page/page.js";
//import MyProvider from "./provider.js"
import 'bootstrap/dist/css/bootstrap.min.css';

const BooksUser = {
    id: '1',
    title: '100 Años de soledad',
    gender: 'realismo fantastico',
    style: 'colombiano'
};

class App extends Component {
  render() {
  return (

    <Router>
    <div>
      <BooksContext.Provider value={BooksUser}>


      <Header />
      <Switch>
        <Route path="/listado" component={Listado} />
        <Route path="/body" component={Body} />
        <Route path="/basic" component={Basic} />
        <Route path="/page" component={Page} />
      </Switch>
      <Footer />
      </BooksContext.Provider>
    </div>
    </Router>

  );

}
}
export default App;
