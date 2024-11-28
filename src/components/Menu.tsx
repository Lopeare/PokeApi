import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Menu():React.JSX.Element {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand className="ms-3" as={Link} to="/home">PokeApi</Navbar.Brand>
      <Nav>
        <Nav.Link as={Link} to="/home">Home</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Menu;
