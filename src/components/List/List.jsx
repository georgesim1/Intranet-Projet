import React, {useState} from 'react';
import {useSelector} from 'react-redux'
import UserCard from '../Card/Card'
import { getUsers } from '../../services/Api.service';


export default function List() {
  const user = useSelector((state) => state.user)

  const [userList, setUserList] = useState([])
  const token = JSON.parse(localStorage.getItem('token'));
  const response = getUsers(token.token)
  response.then(res => setUserList(res))
  ;

  return(
    <div className='wrapper'>
      {
        userList && 
        userList.map(user => <UserCard user={user} />) 
      }
    </div>
  );
  
}