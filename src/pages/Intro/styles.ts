import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    width: 300px;
    border: 0;
    padding: 20px 20px;
    border-radius: 16px;

    background: ${shade(0.7, '#ccc')};
    color: #fff;

    &::placeholder {
      color: #fff;
    }
  }

  button {
    background: ${props => props.theme.colors.senary};
    width: 300px;
    padding: 5px 15px;
    border-color: #ffcc13;
    border-radius: 16px;

    margin-top: 5%;
  }
`;
