import Container from 'react-bootstrap/Container';
import { Navbar, Nav, Button } from 'react-bootstrap'
import '../Header/header.css'

const logout = () => {
  localStorage.clear();
  window.location = "/homepage";
};

function TextLinkExample() {
  const token = JSON.parse(localStorage.getItem('token'));
  return (
    <Navbar expand="lg">
      <Container >
        <Navbar.Brand href="/homepage">
          <img src="https://www.ecole-multimedia.com/data/lecole-multimedia-logo.png" alt="" />
        </Navbar.Brand>
        <Nav>
            <Nav.Link href="/homepage">Home</Nav.Link>
            <Nav.Link href="/edituser">Mon Profil</Nav.Link>
            <Nav.Link href="/list">List d'utilisateurs</Nav.Link>
            {token.user.isAdmin && 
            <Nav.Link href="/adduser">Ajouter Utilisateur</Nav.Link>
            }
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='justify-content-md-end'>
          <span className="logout" onClick={logout} href="#">Logout</span>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TextLinkExample;