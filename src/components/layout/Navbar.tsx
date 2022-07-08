import logo from "@assets/svg/logo.svg";
import {
  Container,
  Nav,
  Navbar as BSNavbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => (
  <BSNavbar bg="dark" variant="dark" expand="lg" sticky="top">
    <Container>
      <BSNavbar.Brand as={Link} to="/">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
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
            title="Dropdown"
            id="basic-nav-dropdown"
            menuVariant="dark"
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
