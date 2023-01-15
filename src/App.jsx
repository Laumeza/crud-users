import axios from 'axios';
import { useEffect, useState } from 'react'
import './App.css'
import UsersForm from './assets/coponents/UsersForm'
import UsersList from './assets/coponents/UsersList';

function App() {

  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState(null);

  const getUsers = () => {
    axios.get("https://users-crud.academlo.tech/users/")
      .then(res => setUsers(res.data))
      .catch(error => console.log(error))  
  }
  
  useEffect(() => {
    getUsers()
  }, [])

  const deleteUser = (id) => {
    axios.delete(`https://users-crud.academlo.tech/users/${id}/`)
    .then(() => getUsers())
    .catch(error => console.log(error))  
  }

  const selectUser = (user) => {
    setUserSelected (user)
  }


  return (
    <div className="App">
      <h1>Hello World</h1>
      <UsersForm 
      getUsers={getUsers}
      selectUser={selectUser}
      userSelected={userSelected}
      />
      <div>
        {
          users?.map(user => (
            <UsersList
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            selectUser={selectUser}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
