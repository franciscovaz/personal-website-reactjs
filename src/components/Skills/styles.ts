import styled from 'styled-components';

export const Container = styled.section`
  /* display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center; */
  display: grid;

  /* Mobile view */
  grid-template-columns: minmax(300px, 1fr);
  justify-content: center;
  grid-gap: 2rem;
  margin: 2rem;

  @media (min-width: 608px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const CardContainer = styled.div`
  box-shadow: 0px 2px 8px 0px #ccc;
  text-align: center;
  border-radius: 16px;
  position: relative;
  overflow: hidden;

  img {
    width: 8rem;
    clip-path: circle(60px at center);
    margin-top: 4.5rem;
  }

  h1 {
    font-size: 1.5rem;
  }

  p {
    margin: 1rem 2rem;
    font-size: 0.9rem;
  }
`;

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
