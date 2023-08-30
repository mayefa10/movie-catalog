
import NavLink from 'react-bootstrap/NavLink';
import Accordion from 'react-bootstrap/Accordion';
import { CiViewList } from 'react-icons/ci';

export default function MenuItem() {
  return (
    
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <CiViewList />
            Menu
          </Accordion.Header>
          <Accordion.Body>
          <NavLink to = "/">Movies</NavLink>
          <NavLink to = "/">Series</NavLink>
          <NavLink to = "/">Community</NavLink>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
  
  );
}
