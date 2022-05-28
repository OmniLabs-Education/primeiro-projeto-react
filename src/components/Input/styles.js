import styled from 'styled-components'

export const Container = styled.div`
  background: #fafafc;
  border-radius: 10px;

  border: 2px solid #e6e6f0;
  color: #6a6180;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    padding: 16px;
    width: 100%;
    border: 0;
    flex: 1;
    background: transparent;
    color: #6a6180;
    outline: none;
  }

  input:focus {
    color: #5A45FF;
    border: 2px solid #5A45FF;
    border-radius: 10px;
  }
`