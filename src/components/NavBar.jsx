import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styled from "styled-components";
import { BsGithub } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";

function NavBar() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Moi</Nav.Link>
            <Nav.Link href="#link">Compétences</Nav.Link>
            <Nav.Link href="#link">Projets</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
        <LinkIcone>
          <a href="https://www.linkedin.com/in/nora-sumane/" target="_blank">
            <BiLogoLinkedin />
          </a>
        </LinkIcone>
        <LinkIcone>
          <a href="https://github.com/nora-sch" target="_blank">
            <BsGithub />
          </a>
        </LinkIcone>
      </Container>
    </Navbar>
  );
}

export default NavBar;
const LinkIcone = styled.div`
  font-size: 30px;
  margin: 0 5px;
  // width:30px;
  // height:30px;
`;
