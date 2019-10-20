import styled from 'styled-components';

export const VerticalNavStyle = styled.nav`
  position: fixed;
  -webkit-writing-mode: vertical-rl;
  writing-mode: vertical-rl;
  margin-right: 80px;
  top: 10vw;
  right: 0;
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
  font-weight: 100;

  a {
    font-size: 20px;
    margin: 50px 0;
    padding: 0 10px;
    color: #ffffff;
  }
`;
