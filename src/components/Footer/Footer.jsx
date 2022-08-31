import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">NewsSite</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">
            Copyright © 2022 News Site Inc. All rights reserved
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Footer;
