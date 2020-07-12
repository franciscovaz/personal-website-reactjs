import styled from 'styled-components';

export const SectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 100vh; */
  justify-content: center;
  align-items: center;
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

  @media (max-width: 769px) {
    margin-top: 20%;
  }
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  /* height: 100vh; */
  justify-content: center;
  align-items: center;

  width: 60%;
  margin: 0 auto;
  padding: 50px 0;
  text-align: justify;

  p {
    line-height: 28px;
    font-size: 22px;

    a {
      /* text-decoration: none; */
      color: ${props => props.theme.colors.secundary};

      &:hover {
        color: rgba(255, 204, 19, 1);
      }
    }
  }
  @media (max-width: 769px) {
    display: flex;
    flex-direction: column;
    /* height: 100vh; */
    justify-content: center;
    align-items: center;
    text-align: justify;
    width: 80%;
  }
`;
