import React, { Component } from "react";
import { Navbar,Nav, Container, NavDropdown, Form, FormControl, Button, } from 'react-bootstrap'
import './extra.css'

export default class Header extends Component {
  render() {
    return (
      <div>

                   {/* Navbar code */}

<Navbar className="navibar" bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>




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
