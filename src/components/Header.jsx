import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MenuItem from './MenuItem';
import { NavLink } from 'react-router-dom';
import Stack from 'react-bootstrap/esm/Stack';

export default function Header() {
  return (
    <div className=''>
       <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="#">MSTVC</Navbar.Brand>
          <MenuItem/>
          </Container>
      </Navbar>
      
    </div>
  );
}
