import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button } from "react-bootstrap";

function Na() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#"><span style={{fontWeight:'bold'}}>Estatery</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Rent</Nav.Link>
              <Nav.Link href="#">Buy</Nav.Link>
              <Nav.Link href="#">Sell</Nav.Link>
              <NavDropdown title="ManageProperty" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">
                  {" "}
                  Drop Item 1 test
                </NavDropdown.Item>
                <NavDropdown.Item href="#">
                  Drop Item 2 test
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Resources" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">
                  {" "}
                  Sample testing
                </NavDropdown.Item>
                <NavDropdown.Item href="#">
                  Sample testing
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div className="flex items-center gap-2">
          <Button variant="violet">Log in</Button>
          <Button variant="primary">Sign up</Button>
        </div>
      </Navbar>
    </>
  );
}

export default Na;
