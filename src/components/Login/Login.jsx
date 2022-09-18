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
    <div className="wrapper-for-login">
    <div className='img-login'>
        <img src="https://www.ecole-multimedia.com/data/lecole-multimedia-logo.png" alt="" />
      </div>
      <div className='login-wrapper'>
      <span className='login100-form-title pb-4'>LOGIN</span>
      <form onSubmit={handleSubmit}>
      <div className='wrap-input100'>
        <input placeholder='Email' className='input100' type="text" onChange={e => setUserName(e.target.value)}/>
        <span className='focus-input100'></span>
      </div>
      <div className='wrap-input100 mt-3'>   
      <input placeholder='Password' className='input100' type="password" onChange={e => setPassword(e.target.value)}/>
      <span className='focus-input100'></span>
      </div>
      <div className='pt-4'>
        <button className='login100-form-btn mx-auto' type="submit">LOG IN</button>
      </div>
    </form>
    </div>
    </div>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}