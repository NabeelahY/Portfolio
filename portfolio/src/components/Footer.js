import React from 'react';
import { FooterStyle } from './styles/FooterStyles';

const Footer = () => {
  return (
    <FooterStyle>
      <p> {new Date().getFullYear()} &copy; Designed by Nabeelah Yousuph</p>
    </FooterStyle>
  );
};

export default Footer;
