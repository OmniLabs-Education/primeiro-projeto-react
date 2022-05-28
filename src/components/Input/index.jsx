import { Container } from "./styles"

function Input({...rest}) {
  return(
    <Container>
      <input {...rest} />
    </Container>
  )
}

export default Input