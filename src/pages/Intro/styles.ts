import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface InputProps {
  hasError: boolean;
}

export const Container = styled.div`
  width: 100px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    background: ${props => props.theme.colors.senary};
    width: 300px;
    padding: 5px 15px;
    border-color: #ffcc13;
    border-radius: 16px;

    margin-top: 5%;
  }
`;

export const Input = styled.input<InputProps>`
  width: 300px;
  border: 0;
  padding: 20px 20px;
  border-radius: 16px;

  background: ${shade(0.7, '#ccc')};
  color: #fff;

  &::placeholder {
    color: #fff;
  }

  ${props =>
    props.hasError &&
    css`
      border: 2px solid #ff0000;
    `}
`;
