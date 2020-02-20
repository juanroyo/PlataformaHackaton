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
import MyProvider from "./Provider.js"
import Header from "./Header/Header.js"
import BooksContext from "./Context.js"
import PruebaContext from "./PruebaContext.js"
import Listado from "./Listado/Listado.js"
import Body from "./Body/Body.js"
import Footer from "./Footer/footer.js"
import Basic from "./Form/basic.js";
import firebase from 'firebase';
import Fire from "./fire.js";
import Cosa from "./prueba.js";

//import MyProvider from "./provider.js"
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {


 /*GetBooks() {
     return firebase
       .database()
       .ref("/")
       .once("value")
       .then(bookList => {
         this.setState({ Book: bookList.val() });
       });
   }*/

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
