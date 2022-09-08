import logo from "@assets/svg/logo.svg";
import {
  Container,
  Nav,
  Navbar as BSNavbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => (
  <BSNavbar bg="dark" expand="lg" sticky="top" variant="dark">
    <Container>
      <BSNavbar.Brand as={Link} to="/">
        <img
          alt=""
          className="d-inline-block align-top"
          height="30"
          src={logo}
          width="30"
        />{" "}
        project_title
      </BSNavbar.Brand>
      <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BSNavbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/form">
            Example Form
          </Link>
          <NavDropdown
            id="basic-nav-dropdown"
            menuVariant="dark"
            title="Dropdown"
          >
            <Link className="dropdown-item" to="dropdown/1">
              Action
            </Link>
            <Link className="dropdown-item" to="dropdown/2">
              Another Action
            </Link>
          </NavDropdown>
        </Nav>
      </BSNavbar.Collapse>
    </Container>
  </BSNavbar>
);

export default Navbar;
