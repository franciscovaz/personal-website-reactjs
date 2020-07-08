import styled from 'styled-components';

export const SectionTitle = styled.div`
  text-align: center;
  color: #fff;
  margin-top: 5%;

  h1 {
    display: inline-block;
    font-size: 28px;
    border-bottom: 1px solid;
    text-transform: uppercase;
    padding: 0 0 10px;
    color: #fff;
  }
`;

export const Container = styled.section`
  width: 60%;
  margin: 0 auto;
  padding: 50px 0;
  text-align: center;

  p {
    line-height: 28px;
    font-size: 22px;

    a {
      /* text-decoration: none; */
      color: #fff;

      &:hover {
        color: rgba(255, 204, 19, 1);
      }
    }
  }
  @media (max-width: 769px) {
    text-align: justify;
  }
`;
