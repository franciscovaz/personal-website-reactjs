import styled from 'styled-components';

const profileImageDark = `${process.env.PUBLIC_URL}/assets/perfil1.jpg`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;

  color: white;
  text-transform: uppercase;
  text-align: center;

  &:nth-of-type(1) {
    position: relative;
    background-image: url(${profileImageDark});
    background-size: cover;
    background-position: center;
  }
`;

export const PersonalInfo = styled.div`
  width: 100%;
  max-width: 100%;
  position: absolute;
  top: 82%;
  color: white;
  text-transform: uppercase;
  text-align: center;
  z-index: 99;

  h1 {
    font-size: 48px;
    letter-spacing: 0.5rem;
    text-shadow: 0.1rem 0.1rem 0.1rem black;
    /* color: ${props => props.theme.colors.secundary}; */
  }

  h5 {
    font-size: 24px;
    /* color: ${props => props.theme.colors.secundary}; */
  }

  @media (max-width: 376px) {
    h1 {
      font-size: 32px;
      margin: 10px 0;
    }

    h5 {
      font-size: 18px;
    }
  }
`;
