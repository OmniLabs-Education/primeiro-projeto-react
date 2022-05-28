import { useState } from "react"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import api from "../../services/api"

function ListUsers() {
  const [users, setUsers] = useState([])
  let navigate = useNavigate()

  useEffect(() => {
    api.get('http://localhost:3000/users').then(response => {
      setUsers(response.data)
    })
  }, [])

  async function handleDeleteUser(user) {
    try {
      await api.delete(`http://localhost:3000/users/${user.id}`)

      const filteredUsers = users.filter(e => e.id !== user.id)

      setUsers(filteredUsers)
    } catch(err) {
      toast('Erro ao excluir usuário', {
        position: 'top-right',
        type: "error",
        autoClose: 5000
      })
    }
  }

  return(
    <div>
      <h1>Listagem de usuários</h1>

      {users.map(user => (
        <div key={user.id}>
          <p>Nome do usuário: {user.name}</p>
          <p>Usuário: {user.username}</p>
          <p>likes: {user.likes}</p>
          <button onClick={() => handleDeleteUser(user)}>
            Excluir usuário
          </button>
          <button onClick={() => navigate(`/updateUser/${user.id}`)}>
            Editar usuário
          </button>
        </div>
      ))}
    </div>
  )
}

export default ListUsers