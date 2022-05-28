import styled from 'styled-components'
import signUpImage from '../../assets/logo.svg'

export const Container = styled.div`
  height: 100vh;
  display: flex;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  background: #fff;

  div {
    form {
      margin: 80px 0;
      width: 340px;
      text-align: center;

      h1 {
        color: #000;
        margin-bottom: 24px;
      }
    }
  }
`;

export const Background = styled.div`
  background: url(${signUpImage}) no-repeat center;
  flex: 1;
  background-size: cover;
`;