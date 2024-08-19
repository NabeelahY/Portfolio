import React from 'react';
import { FooterStyle } from './styles/Footer';

const Footer: React.FC = () => {
  return (
    <FooterStyle>
      <p> {new Date().getFullYear()} &copy; Designed by Nabeelah Yousuph</p>
    </FooterStyle>
  );
};

export default Footer;
