import React , { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from '../components/HomePage/HomePage';
import List from '../components/List/List';
import Login from '../components/Login/Login';
import useToken from '../components/App/useToken';
import NavBar from '../components/Header/header'

import '../assets/css/App.css';

function App() {
  const { token, setToken } = useToken();
  console.log (token);

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <NavBar /> 
      <BrowserRouter>
        <Routes>
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/list" element={<List />} />
          </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
