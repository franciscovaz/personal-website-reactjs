import styled from 'styled-components';

export const Container = styled.section`
  /* width: 60%;
  margin: 0 auto;
  padding: 50px 0;
  text-align: center; */
  display: flex;
  flex-direction: column;
  /* height: 100vh; */
  justify-content: center;
  align-items: center;

  h2 {
    margin-top: 32px;
    font-size: 24px;
    z-index: 99;
  }
`;

export const SectionTitle = styled.div`
  margin-top: 5%;
  text-align: center;
  color: ${props => props.theme.colors.secundary};
  z-index: 99;

  h1 {
    display: inline-block;
    font-size: 32px;
    border-bottom: 1px solid;
    text-transform: uppercase;
    padding: 0 0 10px;
    color: ${props => props.theme.colors.secundary};
  }
`;

export const SocialIcons = styled.div`
  z-index: 99;
  ul {
    li {
      list-style: none;
      margin: 50px 30px;
      display: inline-block;
      padding: 15px 15px;
      border: 1px solid ${props => props.theme.colors.secundary};
      border-radius: 50%;
      transition: 0.5s;

      &:hover {
        background-color: rgba(255, 204, 19, 1);
        border: 1px solid rgba(255, 204, 19, 1);
        transition: 0.5s;
      }
    }
  }

  @media (max-width: 769px) {
    z-index: 99;
    ul {
      li {
        margin: 50px 20px;
      }
    }
  }

  @media (max-width: 376px) {
    z-index: 99;
    ul {
      margin-top: 24px;
      li {
        margin: 20px 5px;
      }
    }
  }
`;
