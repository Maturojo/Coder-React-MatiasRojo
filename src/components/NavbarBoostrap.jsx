// src/components/NavbarBoostrap.jsx
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, Link } from "react-router-dom";
import "../css/Navbar.css";

function NavbarBoostrap() {
  return (
    <Navbar
      expand="lg"
      sticky="top"
      className="navbar-reddion shadow-sm"
    >
      <Container>
        {/* LOGO / MARCA */}
        <Link to="/" className="navbar-brand d-flex align-items-center gap-2">
          <span className="brand-reddion">REDDION</span>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler-reddion" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-links mx-auto align-items-center gap-5">

            <Nav.Link
              as={NavLink}
              to="/"
              className="nav-reddion-link mx-3"
            >
              Inicio
            </Nav.Link>

            <NavDropdown
              title="Productos"
              id="productos-dropdown"
              className="nav-reddion-link mx-3"
              
            >
              <NavDropdown.Item as={NavLink} to="/" end>
                Todos los productos
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item as={NavLink} to="/category/remeras">
                Remeras
              </NavDropdown.Item>

              <NavDropdown.Item as={NavLink} to="/category/hoodies">
                Hoodies
              </NavDropdown.Item>

              <NavDropdown.Item as={NavLink} to="/category/tazas">
                Tazas
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link
              as={NavLink}
              to="/contacto"
              className="nav-reddion-link mx-3"
            >
              Contacto
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarBoostrap;
