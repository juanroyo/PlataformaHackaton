import React, { Component } from 'react';
import { Row, Col, Image, Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import "./Header.css"
import Listado from "../Listado/Listado.js"
import Body from "../Body/Body.js"


class Header extends Component {
  render() {
    return (
      <Router>
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

      <Navbar bg="dark" variant="dark">
              <Navbar.Brand to="/Body">Books</Navbar.Brand>
              <Nav className="mr-auto">
                <NavLink to="/Listado">Listado</NavLink>
                <Nav.Link href="#crear">Crear</Nav.Link>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
              </Form>
      </Navbar>
      <Switch>
          <Route path="/Listado">
            <Listado />
          </Route>
          <Route path="/Body">
            <Body />
          </Route>
        </Switch>

   </div>
   </Router>
    );
  }
}
export default Header
