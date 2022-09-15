import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Card/Card.css'
import moment from 'moment'
import CallIcon from '@mui/icons-material/Call';
import CakeIcon from '@mui/icons-material/Cake';
import MailIcon from '@mui/icons-material/Mail';
import { DeleteUser } from '../../services/Api.service';
import {deleteCollaborater} from '../store/reducerList'
import {useDispatch} from 'react-redux'

// import {useEffect} from 'react';
import { getUsers } from '../../services/Api.service';



function UserCard({user}) {
  const token = JSON.parse(localStorage.getItem('token'));
  console.log(user)
  const birthdate = moment().diff(user.birthdate, 'years' )
  const dispatch = useDispatch()

  function onDelete () {
    if (confirm("Souhaitez vous vraiment supprimer " + user.firstname) == true) {
      DeleteUser (token.token,user.id)
      dispatch(deleteCollaborater({collaborater: user}))
    } 

  }

  return (
    <div className="mt-5">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={user.photo} />
      <Card.Body>
        <Button className='service'>{user.service}</Button>
        <div className='name-age'>
        <Card.Title>{user.firstname}</Card.Title>
        <Card.Text className='age ms-2'>({birthdate} ans)</Card.Text>
        </div>
        <Card.Text className='city'>{user.city}, {user.country}</Card.Text>
        <Card.Text className='email'><MailIcon fontSize="small" /><u>{user.email}</u></Card.Text>
        <Card.Text className='phone'><CallIcon fontSize="small" />{user.phone}</Card.Text>
        <Card.Text className='date mb-3'><CakeIcon fontSize="small" />Anniversaire : {user.birthdate}</Card.Text>
        {token.user.isAdmin && 
        <div className='container-btn'>
        <Button href="/updateuser" className='mx-2'>Editer</Button>
        <Button onClick={onDelete}>{"Supprimer"}</Button>
        </div>
        }
      </Card.Body>
    </Card>
    </div>
  );
}

export default UserCard;