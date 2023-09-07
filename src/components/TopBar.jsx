import { Container, Nav, Navbar } from "react-bootstrap";

const TopBar = ({ brand }) => (
  <Navbar expand="lg" className="bg-body-tertiary">
    <Container fluid="xl">
      <Navbar.Brand href="#">{brand}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About</Nav.Link>
          <Nav.Link href="#browser">Browser</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default TopBar;
