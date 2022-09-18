import React, {useState, useEffect} from 'react';
import UserCard from '../Card/Card'
import { getUsers } from '../../services/Api.service';
import '../List/List.css'
import {addAllCollaboraters} from '../store/reducerList'
import {useDispatch, useSelector} from 'react-redux'

export default function List() {
  const dispatch = useDispatch()
  const {collaboratersToDisplay} = useSelector(state => state.collaboratersList)
  const token = JSON.parse(localStorage.getItem('token'));

  useEffect(()=> {
    const response = getUsers(token.token);
    console.log(token.user)
    response.then(res =>{ dispatch(addAllCollaboraters({collaboraters: res}))
    })
  }, [])
  ;
  
    return(
      <div className='wrapper'>
        <div className='card-wrapper container'>
        {
          collaboratersToDisplay && 
          collaboratersToDisplay.map(user => <UserCard user={user} />) 
        }
        </div>
      </div>
    );
    
  }