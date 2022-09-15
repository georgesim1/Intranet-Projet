import Container from 'react-bootstrap/Container';
import { Navbar, Nav, Button } from 'react-bootstrap'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import HouseIcon from '@mui/icons-material/House';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const logout = () => {
  localStorage.clear();
  window.location = "/";
};

function TextLinkExample() {
  const token = JSON.parse(localStorage.getItem('token'));
  return (
    <Navbar className=''>
      <Container>
        <Navbar.Brand href="/homepage">Intranet George</Navbar.Brand>
        <Nav>
            <Nav.Link href="/homepage"><HouseIcon fontSize="medium" />Home</Nav.Link>
            <Nav.Link href="/list"><FormatListBulletedIcon fontSize="medium" />List</Nav.Link>
            <Nav.Link href="/edituser"><AccountCircleIcon fontSize="medium" />Profil</Nav.Link>
            {token.user.isAdmin && 
            <Nav.Link href="/adduser"><PersonAddAlt1Icon fontSize="medium" />Ajouter Utilisateur</Nav.Link>
            }
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Button className="logout" onClick={logout} href="#">Logout</Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TextLinkExample;