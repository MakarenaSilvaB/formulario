import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import PoliCorp from './images/Polilogo.png';
const Styles = styled.div`
  .navbar { opacity: 0.8; background-color: #222; position: fixed; width: 100%}
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1em;
    font-family: "Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }

  .photo {
    height: 30px;
    width: 30px;
  }
`;
export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/"><img src={PoliCorp} alt="pic" className="photo home"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
            <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/validador">Validador</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/formulario">Formulario</Nav.Link></Nav.Item>
<<<<<<< HEAD
=======
            <Nav.Item><Nav.Link href="/gitflow">GitFlow Demo</Nav.Link></Nav.Item>
>>>>>>> release/testingflow
            <Nav.Item><Nav.Link href="/afiliados">Afiliados</Nav.Link></Nav.Item>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  </Styles>
)
