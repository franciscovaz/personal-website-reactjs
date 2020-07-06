import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  /* height: 100vh; */
  justify-content: center;
  align-items: center;
`;

export const SectionTitle = styled.section`
  text-align: center;
  color: #fff;
  margin-top: 5%;

  h2 {
    display: inline-block;
    font-size: 28px;
    border-bottom: 1px solid;
    text-transform: uppercase;
    padding: 0 0 10px;
    color: #fff;
  }
`;

export const AboutInfo = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 50px 0;
  text-align: center;
  z-index: 99;

  p {
    line-height: 28px;
    font-size: 22px;
    color: #fff;
  }
`;

export const Timeline = styled.div``;
