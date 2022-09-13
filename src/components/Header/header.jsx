import Container from 'react-bootstrap/Container';
import { Navbar, Nav, } from 'react-bootstrap'


function TextLinkExample() {
  return (
    <Navbar className=''>
      <Container>
        <Navbar.Brand href="/homepage">Intranet George</Navbar.Brand>
        <Nav>
            <Nav.Link href="/homepage">Home</Nav.Link>
            <Nav.Link href="/list">List</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Owen Lopez</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TextLinkExample;