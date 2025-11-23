// src/components/NavbarBoostrap.jsx
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, Link } from "react-router-dom";
import CartwidgetIcons from "./CartwidgetIcons";
import "../css/Navbar.css";

function NavbarBoostrap() {
  return (
    <Navbar
      expand="lg"
      sticky="top"
      className="navbar-reddion shadow-sm"   
    >
      <Container>
        
        <Link to="/" className="navbar-brand d-flex align-items-center gap-2">
          <span className="brand-reddion">Reddion</span>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler-reddion" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto align-items-center">
            <NavDropdown
              title="Productos"
              id="productos-dropdown"
              className="dropdown-reddion"
              menuVariant="dark"
            >
              <NavDropdown.Item
                as={NavLink}
                to="/"
                end
                className="dropdown-item-reddion"
              >
                Todos
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item
                as={NavLink}
                to="/category/remeras"
                className="dropdown-item-reddion"
              >
                Remeras
              </NavDropdown.Item>

              <NavDropdown.Item
                as={NavLink}
                to="/category/hoodies"
                className="dropdown-item-reddion"
              >
                Hoodies
              </NavDropdown.Item>

              <NavDropdown.Item
                as={NavLink}
                to="/category/tazas"
                className="dropdown-item-reddion"
              >
                Tazas
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <div className="ms-lg-4">
            <CartwidgetIcons counter={0} />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarBoostrap;
