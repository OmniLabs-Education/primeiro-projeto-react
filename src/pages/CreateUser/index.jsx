import { Container, Content } from './styles'
import Input from '../../components/Input'

function CreateUser() {
  return (
    <Container>
      <Content>
        <div>
          <form>
            <Input type="text" />

            <Input type="text" />

            <button>Cadastrar</button>
          </form>
        </div>
      </Content>
    </Container>
  )
}

export default CreateUser
