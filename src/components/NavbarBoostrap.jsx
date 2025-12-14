
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, Link } from "react-router-dom";
import { useCart } from "./useCart";
import CartWidget from "./CartWidget";

import "../css/Navbar.css";

function NavbarBoostrap() {

  return (
    <Navbar
      expand="lg"
      sticky="top"
      className="navbar-reddion shadow-sm"
    >
      <Container>
        
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center gap-2"
        >
          <span className="brand-reddion">REDDION</span>
        </Link>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="toggler-reddion"
        />

        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="mx-auto align-items-center gap-5">
            
            <Nav.Link
              as={NavLink}
              to="/"
              end
              className="nav-reddion-link"
            >
              Inicio
            </Nav.Link>

            
            <NavDropdown
              title="Productos"
              id="productos-dropdown"
              className="nav-reddion-link"
              menuVariant="dark"
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
              className="nav-reddion-link"
            >
              Contacto
            </Nav.Link>
          </Nav>

          <div className="d-flex align-items-center">
            <CartWidget />
          </div>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarBoostrap;
