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
import ContactUs from './contact';



                   // eslint-disable-next-line no-lone-blocks
                   {/* Navbar code */}
<Router>
<Navbar id="navibar" bg="light" expand="lg">
  <Container fluid>
  <Link to="/home" className="btn btn-primary">hello</Link>
    <Navbar.Brand className="nav__title" as={Link} to={"/home"}>Background Removal</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
    
      </Nav>
      <Nav className="nav__title">
      <Nav.Link as={Link} to={"/Privacy"}>Privacy Policy</Nav.Link>
        <Nav.Link as={Link} to={"/ContactUs"}>Contact-us</Nav.Link>
        </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

<div>
<Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/Privacy" element={<Privacy/>} />
          <Route path="/ContactUs" element={<ContactUs/>} />
         
        </Routes>    
</div>
</Router>
