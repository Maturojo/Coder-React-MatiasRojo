    import Container from 'react-bootstrap/Container';
    import Nav from 'react-bootstrap/Nav';
    import Navbar from 'react-bootstrap/Navbar';
    import NavDropdown from 'react-bootstrap/NavDropdown';
    import CartwidgetIcons from './CartwidgetIcons';
    import "../css/Navbar.css";

    function BasicExample() {
    return (
        <Navbar
            expand="lg"
            sticky="top"
            className="bg-white/80 backdrop-blur border-bottom shadow-sm py-2"
            >
            <Container>
                
                <Navbar.Brand href="#home" className="d-flex align-items-center gap-2">
                <img
                    src="../Logo.png"
                    alt="Logo"
                    style={{ width: "2.8rem", borderRadius: "0.5rem" }}
                />
                <span className="fw-bold fs-5 text-dark">Mi App</span>
                </Navbar.Brand>

                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                {/* Contenido colapsable */}
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto align-items-center">
                    <Nav.Link href="#home" className="mx-2 text-dark fw-medium hover-link">
                    Nuevos
                    </Nav.Link>
                    <Nav.Link href="#link" className="mx-2 text-dark fw-medium hover-link">
                    Link
                    </Nav.Link>
                    
                </Nav>

                
                <div className="ms-lg-4">
                    <CartwidgetIcons counter={15} />
                </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
    }

    export default BasicExample;