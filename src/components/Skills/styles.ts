import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  /* height: 100vh; */
  justify-content: center;
  align-items: center;
`;

export const CardContainer = styled.div``;

export const SectionTitle = styled.div`
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
