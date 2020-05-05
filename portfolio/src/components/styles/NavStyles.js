import styled from 'styled-components';
import { device } from './devices';

const Links = styled.nav`
  a {
    font-size: 1rem;
    margin: 0 15px;
    color: #fff;

    background-image: linear-gradient(#fff, #fff);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0% 1px;
    transition: background-size cubic-bezier(0, 0.5, 0, 1) 0.3s;

    &:hover,
    &:focus {
      background-size: 100% 1px;
    }
  }
  @media ${device.laptop} {
    a {
      font-size: 1.5rem;
      padding: 0 10px;
    }
  }
`;

export const VerticalNavStyle = styled(Links)`
  display: flex;
  // justify-content: flex-end;
  margin: 20px 0;
  // position: fixed;
  // margin-right: 80px;
  // top: 0;
  // right: 0;
  // -ms-transform: rotate(270deg);
  // transform: rotate(270deg);
  // transform-origin: right top 8vw;
  // font-weight: 100;

  // svg {
  //   -ms-transform: rotate(90deg);
  //   transform: rotate(90deg);
  // }
`;

export const MainNavStyles = styled(Links)`
  margin: 20px 0 10px 0;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  text-transform: uppercase;
  font-weight: 200;

  @media ${device.laptop} {
    margin: 100px auto 10px;
    padding: 0 10px;
    width: 570px;
    display: flex;
    justify-content: space-between;
    text-align: center;
    text-transform: uppercase;

    a {
      font-size: 18px;
      margin: 0;
      padding-bottom: 5px;
    }
  }
`;
