import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import MenuItem from './MenuItem';


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
