// import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
    //   <Navbar bg="dark" variant="dark">
    //     <Container>
    //       <Navbar.Brand >Navbar</Navbar.Brand>
    //       <Nav className="me-auto">
    //         <Nav.Link href="/">News</Nav.Link>
    //         <Nav.Link href="/archive">Archive</Nav.Link>
    //       </Nav>
    //     </Container>
    //   </Navbar>

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Header</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">News</Nav.Link>
            <Nav.Link href="/archive">Archive</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    //     <nav>
    //         <span><Link to="/">News</Link></span>
    //         <span><Link to="/archive" >Archive</Link> </span>
    //   </nav>
    )
  }
  
  export default Header