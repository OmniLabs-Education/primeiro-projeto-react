import { Container, Content, Background } from './styles'
import Input from '../../components/Input'
import Button from '../../components/Button'
import api from '../../services/api'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'

function CreateUser() {
  const [nome, setNome] = useState("");
  const [username, setUsername] = useState("");
  let navigate = useNavigate()

  async function handleCreateUser(event) {
    try {
      event.preventDefault()

      await api.post('http://localhost:3000/users', {
        name: nome,
        username: username
      })

      toast('Usuário criado com sucesso', {
        position: 'top-right',
        type: "success",
        autoClose: 5000
      })

      navigate('/listUsers')
    } catch(err) {
      toast('Erro ao criar usuário', {
        position: 'top-right',
        type: "error",
        autoClose: 5000
      })
    }
  }

  return (
    <Container>
      <Background />
      <Content>
        <div>
          <form onSubmit={event => handleCreateUser(event)}>
            <h1>Faça seu cadastro</h1>

            <Input
              type="text"
              placeholder="Digite seu nome"
              onChange={event => setNome(event.target.value)}
            />

            <Input
              type="text"
              placeholder="Digite o usuário"
              onChange={event => setUsername(event.target.value)}
            />

            <Button type="submit">
              Cadastrar
            </Button>
          </form>

            <Link to="/listUsers/teste">
              Listagem de usuários
            </Link>
        </div>
      </Content>
    </Container>
  )
}

export default CreateUser
