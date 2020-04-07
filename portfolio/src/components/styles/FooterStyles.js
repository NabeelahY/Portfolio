import styled from 'styled-components';
import { device } from './devices';

export const FooterStyle = styled.footer`
  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans:300,400&display=swap');
  border-top: 1px solid #fff;
  text-align: center;
  width: 100%;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 0.8rem;
  font-weight: 200;
  color: #fff;
  padding: 20px 0;
  p {
    text-align: center;
  }
  @media ${device.laptop} {
    font-size: 20px;
    font-weight: 300;
  }
`;
