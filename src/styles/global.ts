import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body{
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.secundary};
    -webkit-font-smoothing: antialiased;
    font-family: 'PT Sans Narrow', sans-serif;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }
`;
