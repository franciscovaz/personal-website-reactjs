import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  /* height: 100vh; */
  justify-content: center;
  align-items: center;
  @media (min-width: 1024px) {
    width: 100%;
    margin: 0 auto;
    padding: 0 40px;
  }
`;

export const TitleSection = styled.div`
  text-align: center;
  color: ${props => props.theme.colors.secundary};
  margin-top: 5%;

  h1 {
    display: inline-block;
    font-size: 28px;
    border-bottom: 1px solid;
    text-transform: uppercase;
    padding: 0 0 10px;
    color: ${props => props.theme.colors.secundary};
  }

  h3 {
    margin-top: 24px;
    padding: 0 20%;
    text-align: center;
  }

  @media (max-width: 769px) {
    width: 90%;
    margin: 10% auto;
    z-index: 99;

    h3 {
      padding: 0 10px;
      font-size: 16px;
      color: #ccc;
    }
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  height: 370px;

  margin-top: 32px;
  z-index: 99;

  img {
    max-width: 370px;
    height: 370px;
    object-fit: contain;
    object-position: center center;
    padding: 20px 10px;
  }

  p {
    padding: 10px 40px;
    text-align: justify;
  }

  @media (min-width: 319px) {
    z-index: 99;
    img {
      max-width: 300px;
      padding: 0 10px 10px;
    }

    p {
      padding: 10px 20px;
    }
  }

  @media (min-width: 767px) {
    display: flex;
    flex-direction: row;
    z-index: 99;

    img {
      width: 50%;
      max-width: 370px;
      padding: 10px 20px;
    }

    p {
      padding: 10px 20px;
    }
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    z-index: 99;

    img {
      width: 50%;
      max-width: 970px;
      padding: 20px 10px;
    }

    p {
      padding: 10px 40px;
    }
  }
`;

export const ProjectTitle = styled.div`
  text-align: center;
  margin-top: 5%;

  @media (max-width: 769px) {
    margin-top: 10%;
  }
`;

export const TechnologiesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    padding: 0 20px;
    height: 20px;
    & + p {
      border-left: 1px solid ${props => props.theme.colors.secundary};
    }
  }

  @media (min-width: 319px) {
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      height: 20px;
      padding: 0 10px;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 20px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid rgba(255, 204, 19, 1);
    background: transparent;
    color: ${props => props.theme.colors.secundary};
    border-radius: 16px;

    padding: 5px 15px;

    & + button {
      margin-left: 32px;
    }

    svg {
      margin-right: 5px;
    }
  }
`;
