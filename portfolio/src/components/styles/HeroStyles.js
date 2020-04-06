import styled from 'styled-components';
import { device } from './devices';

export const HeroWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`;

export const HeroStyle = styled.div`
  display: flex;
  align-items: baseline;
  margin-top: 100px;
  h1 {
    font-family: 'Righteous', cursive;
    font-size: 6rem;
    background: linear-gradient(180deg, #ffffff 40%, #a9a8ed);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  span {
    font-size: 2rem;
  }

  @media ${device.laptop} {
    h1 {
      font-size: 230px;
    }
    span {
      font-size: 4rem;
    }
  }
`;

export const TagLine = styled.div`
  color: #ffffff;
  padding: 0 5px;
  font-size: 1.5rem;
  font-weight: 200;
  @media ${device.laptop} {
    font-size: 3rem;
  }
`;
