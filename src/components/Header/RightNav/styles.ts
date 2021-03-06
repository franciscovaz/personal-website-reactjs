import styled from 'styled-components';

interface RightNavProps {
  open: boolean;
}

export const Container = styled.ul<RightNavProps>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 25px;

    a {
      text-decoration: none;
      text-transform: uppercase;
      color: ${props => props.theme.colors.secundary};

      font-weight: 700;
      font-size: 20;
      letter-spacing: 0.1rem;

      &.active,
      &:hover {
        color: #ffcc13;
      }
    }
  }

  @media (max-width: 930px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.95);
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 2rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: ${props => props.theme.colors.secundary};

      a {
        text-decoration: none;
        text-transform: uppercase;
        color: ${props => props.theme.colors.septenary};

        font-weight: 700;
        font-size: 20px;
        letter-spacing: 0.1rem;

        &.active,
        &:hover {
          color: #ffcc13;
        }
      }
    }
  }
`;

export const SocialNetWork = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
