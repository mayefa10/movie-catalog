import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { BiSolidCameraMovie } from 'react-icons/bi';



function Header() {
  return (
  
    <Navbar expand="lg" className="bg-dark">
      <Container>
          <Navbar.Brand as={Link} to="/" className="text-light">
          <BiSolidCameraMovie className='icon-nav' />
          MVTVCN
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              <NavDropdown className="bg-light" title="Menu" id="basic-nav-dropdown">
               <NavDropdown.Item  as={Link} to="/">
               Trends
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/home-series">
                Programs
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/home-movie">Movies</NavDropdown.Item>
              </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
  );
}
export default Header;
