import styled from 'styled-components';
import { device } from './devices';

export const ProjectWrapper = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans:300,400&display=swap');
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  background: rgba(156, 195, 213, 0.5);
  border-radius: 5px;
  max-width: 400px;
`;

export const CardWrapper = styled.div`
  max-width: 350px;
  height: 200px;
  overflow: hidden;
  margin: 20px;
  position: relative;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 300;

  &:hover .content {
    top: 0;
    left: 0;
    transform: rotate(0deg);
    a {
      right: 0;
      transition-delay: 400ms;
    }
  }
  img {
    width: 100%;
    height: 100%;
  }

  .content {
    max-width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(255, 255, 255, 0.9);
    left: -100%;
    top: -100%;
    transition: all 200ms linear;
    transform: rotate(90deg);
    font-weight: 300;
    h2 {
      font-size: 18px;
      font-weight: bold;
      margin: 10px 0;
      text-align: center;
    }
    div {
      font-size: 14px;
      margin: 10px;
      line-height: 2;
      text-align: center;
    }
    a {
      position: absolute;
      left: 0;
      text-align: center;
      padding: 5px;
      color: #000;
      width: 100px;
      border: solid #000 1px;
      border-radius: 5px;
      margin: 0 auto;

      &:hover {
        color: #1cb5e0;
        border: solid #1cb5e0 2px;
      }
    }
    @media ${device.laptop} {
      h2 {
        font-size: 18px;
        margin: 15px 0;
      }
      div {
        font-size: 16px;
      }
      a {
        padding: 8px;
      }
    }
  }
`;
