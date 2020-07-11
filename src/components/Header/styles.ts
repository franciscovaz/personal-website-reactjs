import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  top: 0;

  width: 100%;
  height: 90px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.quaternary};
  z-index: 100;
`;
