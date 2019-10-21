import styled from 'styled-components';
import img from '../../assets/nab.JPG';

export const InfoWrapper = styled.section`
  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans:300,400&display=swap');
  margin: 10px;
  background-color: #fff;
  width: 600px;
  border-radius: 5px;
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
`;

export const AboutStyle = styled.div`
  display: flex;
  h3 {
    font-size: 18px;
    font-weight: bold;
  }
  width: 100%;
  text-align: left;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 2;
`;

export const AboutImg = styled.div`
  width: 30%;
  background: url(${img}) center no-repeat;
  background-size: cover;
  div {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    filter: saturate(0.7);
    background: url(https://jaysalvat.github.io/vegas/releases/latest/overlays/14.png);
  }
`;

export const ContentStyle = styled.div`
  width: 70%;
  margin: 10px;
`;
