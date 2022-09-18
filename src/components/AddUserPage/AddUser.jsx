import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import { AddUser } from '../../services/Api.service';
import { useState, useEffect } from 'react';
import '../AddUserPage/AddUser.css'

export default function addUserForm() {
  const [gender, setgender] = useState ("")
  const [firstname, setfirstname] = useState ("")
  const [lastname, setlastname] = useState ("")
  const [password, setpassword] = useState ("")
  const [email, setemail] = useState ("")
  const [phone, setphone] = useState ("")
  const [birthdate, setbirthdate] = useState ("")
  const [city, setcity] = useState ("")
  const [country, setcountry] = useState ("")
  const [photo, setphoto] = useState ("")
  const [service, setservice] = useState ("")
  const token = JSON.parse(localStorage.getItem('token'));
  const user = token.user

  function onSubmitUser(event) {
    event.preventDefault()
    const newUser = {
      "gender": gender,
      "firstname": firstname,
      "lastname": lastname,
      "password": password,
      "email": email,
      "phone": phone,
      "birthdate": birthdate,
      "city": city,
      "country": country,
      "photo": photo,
      "service": service, 
    }
    const token = JSON.parse(localStorage.getItem('token'));
    console.log(newUser);
    AddUser (token.token,newUser)
  }

  useEffect(() => {
    setemail(user.email);
    setphone(user.phone);
    setgender(user.gender);
    setcity(user.city);
    setcountry(user.country);
    setphoto(user.photo);
    setfirstname(user.firstname);
    setlastname(user.lastname);
    setbirthdate(user.birthdate);
    setservice(user.service);
}, []);

  return (
    <div className='container form-wrapper'>
      <Form>
      <h4 className='text-center'>Créer un utilisateur</h4>
      <Form.Label>Civilite :</Form.Label>
      <Form.Select onChange={(event) => setgender(event.target.value) }
      aria-label="Default select example">
      <option value="male">Homme</option>
      <option value="female">Femme</option>
    </Form.Select>
        <Form.Group>
          <Form.Label>Service :</Form.Label>
          <Form.Select onChange={(event) => setservice(event.target.value) } 
          aria-label="Client">
          <option value="Client">Client</option>
          <option value="Marketing">Marketing</option>
          <option value="Technique">Technique</option>
    </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label>Prenom :</Form.Label>
          <Form.Control onChange={(event) => setfirstname(event.target.value) } type="text" 
                        placeholder="Enter your full name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Nom :</Form.Label>
          <Form.Control onChange={(event) => setlastname(event.target.value) } type="text" 
                        placeholder="Enter your full name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Téléphone :</Form.Label>
          <Form.Control onChange={(event) => setphone(event.target.value) } type="telephone" 
                        placeholder="Enter your full name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email :</Form.Label>
          <Form.Control onChange={(event) => setemail(event.target.value) }type="email" 
                        placeholder="Enter your your email address" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password :</Form.Label>
          <Form.Control onChange={(event) => setpassword(event.target.value) }type="password" 
                        placeholder="Enter your password" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Date de naissance</Form.Label>
          <Form.Control onChange={(event) => setbirthdate(event.target.value) } type="date" placeholder="Enter your Birthdate" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Ville :</Form.Label>
          <Form.Control onChange={(event) => setcity(event.target.value) } type="city" placeholder="Paris" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Pays :</Form.Label>
          <Form.Control onChange={(event) => setcountry(event.target.value) } type="country" placeholder="France" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Url de la photo :</Form.Label>
          <Form.Control onChange={(event) => setphoto(event.target.value) } type="link" placeholder="https://" />
        </Form.Group>
          <div className='text-center mt-3'>
          <span onClick={onSubmitUser} type="submit" className='add-btn'>
           Ajouter
          </span>
          </div>
      
      </Form>
    </div>
  );
}