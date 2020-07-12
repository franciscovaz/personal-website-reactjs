import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  /* height: 100vh; */
  justify-content: center;
  align-items: center;
`;

export const SectionTitle = styled.div`
  text-align: center;
  color: ${props => props.theme.colors.secundary};
  margin-top: 5%;
  z-index: 99;

  h2 {
    display: inline-block;
    font-size: 28px;
    border-bottom: 1px solid;
    text-transform: uppercase;
    padding: 0 0 10px;
    color: ${props => props.theme.colors.secundary};
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
    color: ${props => props.theme.colors.secundary};
  }

  @media (max-width: 769px) {
    width: 80%;
    text-align: justify;
  }
`;

export const Timeline = styled.div`
  position: relative;
  margin: 50px auto;
  padding: 40px 0;
  width: 1000px;
  z-index: 99;

  &:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    width: 2px;
    height: 100%;
    background: #c5c5c5;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
    position: relative;
    width: 50%;
    padding: 20px 40px;
    box-sizing: border-box;

    &:nth-child(odd) {
      float: left;
      clear: both;
      text-align: right;
    }

    &:nth-child(odd):before {
      content: '';
      position: absolute;
      top: 24px;
      right: -6px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: rgba(255, 204, 19, 1);
      box-shadow: 0 0 0 3px rgba(255, 204, 19, 0.2);
    }

    &:nth-child(even) {
      float: right;
      clear: both;
      text-align: left;
    }

    &:nth-child(even):before {
      content: '';
      position: absolute;
      top: 24px;
      left: -4px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: rgba(255, 204, 19, 1);
      box-shadow: 0 0 0 3px rgba(255, 204, 19, 0.2);
    }

    h3 {
      margin: 0;
      padding: 0;
      font-weight: 600;
      color: rgba(255, 204, 19, 1);
    }

    p {
      margin: 10px 0 0;
      padding: 0;
      color: ${props => props.theme.colors.secundary};
    }

    & .time {
      h4 {
        margin: 0;
        padding: 0;
        font-size: 14px;
      }
    }

    &:nth-child(odd) .time {
      position: absolute;
      top: 12px;
      right: -165px;
      margin: 0;
      padding: 8px 16px;
      background: rgba(255, 204, 19, 1);
      color: #000;
      border-radius: 18px;
      box-shadow: 0 0 0 3px rgba(255, 204, 19, 0.2);
    }

    &:nth-child(even) .time {
      position: absolute;
      top: 12px;
      left: -165px;
      margin: 0;
      padding: 8px 16px;
      background: rgba(255, 204, 19, 1);
      color: #000;
      border-radius: 18px;
      box-shadow: 0 0 0 3px rgba(255, 204, 19, 0.2);
    }

    a {
      /* text-decoration: none; */
      color: ${props => props.theme.colors.secundary};

      &:hover {
        color: rgba(255, 204, 19, 1);
      }
    }
  }

  @media (max-width: 1000px) {
    width: 100%;
  }

  @media (max-width: 767px) {
    width: 100%;

    li {
      p {
        color: ${props => props.theme.colors.secundary};
      }

      &:nth-child(odd),
      &:nth-child(even) {
        width: 100%;
        text-align: justify;
        padding-left: 50px;
        padding-bottom: 50px;
      }

      &:nth-child(odd):before,
      &:nth-child(even):before {
        top: -18px;
        left: 16px;
      }

      &:nth-child(odd) .time,
      &:nth-child(even) .time {
        top: -30px;
        left: 50px;
        right: inherit;
        color: black;
      }
    }

    &:before {
      left: 20px;
      padding-bottom: 0;
    }
  }
`;

export const TimelineContent = styled.div`
  padding-bottom: 20px;
`;
