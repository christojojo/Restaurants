import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'; 
import { Link } from 'react-router-dom';


function Header() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">RESTAURANTS</Navbar.Brand>
      
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Header