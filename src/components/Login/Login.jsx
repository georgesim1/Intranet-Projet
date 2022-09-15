import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { loginUser } from '../../services/Api.service';

import "../Login/Login.css"

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
      const token = await loginUser({
      "email": username,
      "password": password
    });
    setToken(token)
  }

  return(
    <div className="container">
    <div className="login-wrapper">
      <h1 className='title'>Lorum Ipsum</h1>
    <form onSubmit={handleSubmit}>
      <div className=''>
      <label>
        
        <input placeholder='Email' className='username' type="text" onChange={e => setUserName(e.target.value)}/>
      </label>
      </div>
      <div className='mt-3'>
      <label>
        
        <input placeholder='Password' className='password' type="password" onChange={e => setPassword(e.target.value)}/>
      </label>
      </div>
      <div>
        <button className='sub-btn mx-auto' type="submit">Log In</button>
      </div>
    </form>
    </div>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}