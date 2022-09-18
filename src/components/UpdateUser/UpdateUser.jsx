import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { Modify } from '../../services/Api.service';




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
  console.log(user);
  function onSubmitUser(event) {
    event.preventDefault()
    const ModifyUser = {
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
    Modify(token.token,ModifyUser,user.id)
  }
  useEffect(() => {
        console.log(user);
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
    <div className='container'>
      <div className='form-wrapper mx-auto'>
      <Form>
      <h4 className='text-center span-title'>Modifier mon profil</h4>
      <Form.Label>Civilite :</Form.Label>
      <Form.Select onChange={(event) => setgender(event.target.value) }
      aria-label="Default select example">
      <option value="male">Homme</option>
      <option value="female">Femme</option>
    </Form.Select>
        <Form.Group>
          <Form.Label>Service :</Form.Label>
          <Form.Select onChange={(event) => setservice(event.target.value) } 
          aria-label="Client" defaultValue={user.service}>
          <option value="Client">Client</option>
          <option value="Marketing">Marketing</option>
          <option value="Technique">Technique</option>
    </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label>Prenom :</Form.Label>
          <Form.Control onChange={(event) => setfirstname(event.target.value) } type="text" 
                        placeholder="Enter your full name" defaultValue={user.firstname}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Nom :</Form.Label>
          <Form.Control onChange={(event) => setlastname(event.target.value) } type="text" 
                        placeholder="Enter your full name" defaultValue={user.lastname}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Téléphone :</Form.Label>
          <Form.Control onChange={(event) => setphone(event.target.value) } type="telephone" 
                        placeholder="Enter your full name" defaultValue={user.phone}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Email :</Form.Label>
          <Form.Control onChange={(event) => setemail(event.target.value) }type="email" 
                        placeholder="Enter your your email address" defaultValue={user.email}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password :</Form.Label>
          <Form.Control onChange={(event) => setpassword(event.target.value) }type="password" 
                        placeholder="Enter your password" defaultValue={user.password}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Date de naissance</Form.Label>
          <Form.Control onChange={(event) => setbirthdate(event.target.value) } type="date" placeholder="Enter your Birthdate" 
          defaultValue={user.birthdate}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Ville :</Form.Label>
          <Form.Control onChange={(event) => setcity(event.target.value) } type="city" placeholder="Paris" defaultValue={user.city}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Pays :</Form.Label>
          <Form.Control onChange={(event) => setcountry(event.target.value) } type="country" placeholder="France" defaultValue={user.country}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Url de la photo :</Form.Label>
          <Form.Control onChange={(event) => setphoto(event.target.value) } type="link" placeholder="https://" defaultValue={user.photo}/>
        </Form.Group>
        <div className='text-center mt-3'>
          <span onClick={onSubmitUser} type="submit" className='add-btn'>
           Ajouter
          </span>
          </div>
      </Form>
      </div>
    </div>
  );
}