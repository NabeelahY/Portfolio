import styled from 'styled-components';
import { device } from './devices';

export const ContactWrapper = styled.div`
  padding: 10px;
  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans:300,400&display=swap');
  background: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  text-align: center;
  font-size: 18px;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 350;
  line-height: 2;

  div {
    p {
      font-size: 0.8rem;
    }
    a {
      color: #fff;
      font-size: 0.8rem;
      &:hover {
        font-weight: bold;
      }
    }
  }

  @media ${device.laptop} {
    font-size: 24px;
    div {
      p {
        font-size: 1.2rem;
      }
      a {
        font-size: 1.2rem;
      }
    }
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  h3 {
    font-size: 1rem;
    font-weight: bold;
  }
  span {
    margin: 0 10px;
    font-size: 1.5rem;
  }

  @media ${device.laptop} {
    h3 {
      font-size: 28px;
      font-weight: bold;
    }
    span {
      margin: 0 10px;
      font-size: 60px;
    }
  }
`;
