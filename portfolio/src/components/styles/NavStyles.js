import styled from 'styled-components';

const Links = styled.nav`
  a {
    font-size: 20px;
    margin: 0 50px;
    padding: 0 2px;
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
`;

export const VerticalNavStyle = styled(Links)`
  position: fixed;
  margin-right: 80px;
  top: 10vw;
  right: 0;
  -ms-transform: rotate(270deg);
  transform: rotate(270deg);
  transform-origin: right top 10vw;
  font-weight: 100;
`;

export const MainNavStyles = styled(Links)`
  margin: 100px auto 10px;
  padding: 0 10px;
  width: 570px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  text-transform: uppercase;
  font-weight: 200;

  a {
    margin: 0;
    padding-bottom: 5px;
  }
`;
