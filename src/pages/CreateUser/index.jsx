import { Container, Content, Background } from './styles'
import Input from '../../components/Input'
import Button from '../../components/Button'

function CreateUser() {
  return (
    <Container>
      <Background />
      <Content>
        <div>
          <form>
            <h1>Faça seu cadastro</h1>

            <Input type="text" placeholder="Digite seu nome" />

            <Input type="text" placeholder="Digite o usuário" />

            <Button>
              Cadastrar
            </Button>
          </form>
        </div>
      </Content>
    </Container>
  )
}

export default CreateUser
