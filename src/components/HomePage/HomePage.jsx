import React, { useState, useEffect } from 'react';
import { getUserRandom } from '../../services/Api.service';
import UserCard from '../Card/Card';
  
export default function HomePage() {
  const [userRandom, setUserRandom] = useState(null)
  const token = JSON.parse(localStorage.getItem('token'));
  useEffect(()=> {
    const response = getUserRandom(token.token)
    response.then(res => setUserRandom(res))
  }, [])
  
  return(
    <div className='wrapper'>
      <div className='card-wrapper'>
      {
        userRandom && 
        <UserCard user={userRandom} />
      }
      </div>
    </div>
  );
}