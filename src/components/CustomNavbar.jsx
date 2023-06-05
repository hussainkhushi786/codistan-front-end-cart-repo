import React from 'react';
import { Navbar, Nav,Container,Row,Col } from 'react-bootstrap';
import Cart from './Cart';

const CustomNavbar = () => {
  return (
    <Container fluid>
      <Row>
        <Col className='px-0'>
          <Navbar bg="light " expand="lg" className="px-4 fixed-top">
          <Navbar.Brand href="#">CODISTAN</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="ms-auto">
            <Cart/>
           </Nav>
           </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
    
  );
}

export default CustomNavbar;
