import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function UserCard({user}) {
  return (

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={user.photo} />
      <Card.Body>
        <Card.Title>{user.firstname}</Card.Title>
        <Card.Text>{user.city},{user.country}</Card.Text>
        <Card.Text><u>{user.email}</u></Card.Text>
        <Card.Text><u>{user.phone}</u></Card.Text>
        <Card.Text>{user.birthdate}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default UserCard;