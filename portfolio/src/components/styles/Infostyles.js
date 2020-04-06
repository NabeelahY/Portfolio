import styled from 'styled-components';
import img from '../../assets/nab.jpeg';
import { device } from './devices';

export const InfoWrapper = styled.section`
  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans:300,400&display=swap');
  // margin: 20px;

  .fade-enter {
    opacity: 0.01;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }

  div.transition-group {
    position: relative;
  }
  section {
    margin: 0 auto;
  }
`;

export const AboutStyle = styled.div`
  display: flex;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  text-align: left;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 200;
  font-size: 0.9rem;
  line-height: 2;
  h3 {
    font-weight: 500;
    margin: 5px 0;
  }
  @media ${device.laptop} {
    font-weight: 300;
    font-size: 20px;
    line-height: 2;
    h3 {
      font-weight: 500;
      margin: 10px 0;
    }
  }
`;

export const AboutImg = styled.div`
  width: 30%;
  background: url(${img}) center no-repeat;
  background-size: cover;
`;

export const ContentStyle = styled.div`
  width: 70%;
  padding: 10px;
`;

export const StackStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 0.8rem;
  div {
    margin: 5px;
  }
  svg {
    font-size: 0.8rem;
  }
  img {
    width: 10px;
    height: 10px;
  }
  @media ${device.laptop} {
    font-size: 1rem;
    div {
      margin: 20px;
    }
    svg {
      font-size: 2rem;
    }
    img {
      width: 20px;
      height: 20px;
    }
  }
`;
