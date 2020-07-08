import styled from 'styled-components';

import profileImage from '../../assets/perfil1.jpg';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;

  &:nth-of-type(1) {
    background-image: url(${profileImage});
    background-size: cover;
    background-position: center;
  }
`;

export const PersonalInfo = styled.div`
  width: 100%;
  max-width: 100%;
  position: absolute;
  top: 82%;
  z-index: 1;
  color: white;
  text-transform: uppercase;
  text-align: center;

  h1 {
    font-size: 48px;
    letter-spacing: 0.5rem;
    text-shadow: 0.1rem 0.1rem 0.1rem black;
  }

  h5 {
    font-size: 24px;
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
