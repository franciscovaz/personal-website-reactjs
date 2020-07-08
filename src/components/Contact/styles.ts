import styled from 'styled-components';
import { shade } from 'polished';

export const SectionTitle = styled.div`
  margin-top: 5%;
  text-align: center;
  color: #fff;

  h1 {
    display: inline-block;
    font-size: 32px;
    border-bottom: 1px solid;
    text-transform: uppercase;
    padding: 0 0 10px;
    color: #fff;
  }

  h3 {
    margin-top: 16px;
    font-size: 20px;
    color: ${shade(0.2, '#fff')};
  }
`;

export const Container = styled.section`
  width: 60%;
  margin: 0 auto;
  padding: 50px 0;
  text-align: center;

  h2 {
    margin-top: 32px;
    font-size: 24px;
  }
`;

export const SocialIcons = styled.div`
  ul {
    li {
      list-style: none;
      margin: 50px 30px;
      display: inline-block;
      padding: 15px 15px;
      border: 1px solid #fff;
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
    ul {
      li {
        margin: 50px 20px;
      }
    }
  }

  @media (max-width: 376px) {
    ul {
      margin-top: 24px;
      li {
        margin: 20px 20px;
      }
    }
  }
`;
