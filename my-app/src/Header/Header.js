import React, { Component } from 'react';
import { Row, Col, Image, Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Link
} from "react-router-dom";
import "./Header.css"



class Header extends Component {
  render() {
    return (

      <div>
      <Navbar>
              <Navbar.Brand href="#home">Free Books</Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
              Signed in as: <a href="#login">Juan y Jose</a>
              </Navbar.Text>
              </Navbar.Collapse>
      </Navbar>
      <div class="menu">
      <ul class="palcentro">

        <li>
          <Link to="/body">Home</Link>
        </li>
        <li>
          <Link to="/listado">Listado</Link>
        </li>
        <li>
          <Link to="/basic">Formulario</Link>
      </li>

      </ul>
    </div>
   </div>
    );
  }
}
export default Header
