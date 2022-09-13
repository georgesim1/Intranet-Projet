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

  