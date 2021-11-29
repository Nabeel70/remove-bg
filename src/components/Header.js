import React, { Component } from "react";
import { Navbar,Nav, Container } from 'react-bootstrap';
import './extra.css';
import './RemoveBackground.js';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Home from "./RemoveBackground.js";
import Privacy from "./Privacy";
import ContactUs from './contact'




export default class Header extends Component {
  render() {
    return (
      <div>

                   {/* Navbar code */}

<Navbar id="navibar" bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand className="nav__title" href="/home">Background Removal</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
    
      </Nav>
      <Nav className="nav__title">
      <Nav.Link href="/Privacy">Privacy Policy</Nav.Link>
        <Nav.Link href="/ContactUs">Contact-us</Nav.Link>
        </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

<Router>
<div>
<Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/Privacy" element={<Privacy/>} />
          <Route path="/ContactUs" element={<ContactUs/>} />
         
        </Routes>    
</div>
</Router>

        <header className="text-white text-center">
          <img
            alt="Logo pic"
            src="https://i.ibb.co/N9nkZRH/img.png"
            width="120"
            className="mb-4"
          />
          <h1 className="display-4">Background Removal Web App</h1>
          <p className="lead mb-0">Fast, simple and great performance.</p>
        </header>
      </div>
    );
  }
}
