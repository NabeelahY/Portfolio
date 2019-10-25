import styled from 'styled-components';
import img from '../../assets/nab.jpeg';

export const InfoWrapper = styled.section`
  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans:300,400&display=swap');
  margin: 20px;

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
  width: 800px;
  text-align: left;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 300;
  font-size: 20px;
  line-height: 2;
  h3 {
    font-weight: 500;
    margin: 10px 0;
  }
`;

export const AboutImg = styled.div`
  width: 30%;
  background: url(${img}) center no-repeat;
  background-size: cover;
`;

export const ContentStyle = styled.div`
  width: 70%;
  margin: 10px;
`;

export const StackStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 18px;
  div {
    margin: 20px;
  }
  svg {
    font-size: 20px;
  }
  img {
    width: 20px;
    height: 20px;
  }
`;
