// Login details of the users
export async function loginUser(credentials) {
    console.log(credentials);
    return fetch('http://localhost:7000/api/login',
    {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(credentials)
    })
      .then(data => data.json()).then(res=>res);
   }
// Gets list of all users 
   export async function getUsers (token) {
    return fetch('http://localhost:7000/api/collaborateurs',
    {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`

      }
    })
      .then(data => data.json())
      .then(res=>res)
      .catch (error => console.log(error))
   }
// Get random user 
   export async function getUserRandom (token) {
    return fetch('http://localhost:7000/api/collaborateurs/random',
    {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`

      }
    })
      .then(data => data.json())
      .then(res=>res)
      .catch (error => console.log(error))
   }
// Delete a user 
   export async function DeleteUser (token,id) {
    console.log(token,id);
    return fetch('http://localhost:7000/api/collaborateurs/'+ id,
    {
      method: 'DELETE', 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`

      }
    })
      .then(data => data.json())
      .then(res=>res)
      .catch (error => console.log(error))
   }
   // Modify a user 
   export async function Modify (token,credentials,id) {
    console.log(credentials);
    return fetch('http://localhost:7000/api/collaborateurs/' + id,
    {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body:JSON.stringify(credentials)
    })
      .then(data => data.json()).then(res=>res);
   }
   // Create details of the users
  export async function AddUser(token,credentials) {
  console.log(credentials);
  return fetch('http://localhost:7000/api/collaborateurs',
  {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body:JSON.stringify(credentials)
  })
    .then(data => data.json()).then(res=>res);
 }


  