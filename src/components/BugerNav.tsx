import React from 'react';
import { BurgerNavStyles } from './styles/Nav';

const BugerNav: React.FC<{ open: any }> = ({ open }) => {
  const menu = ['Stack', 'Projects', 'Contact'];
  return (
    <BurgerNavStyles className={open ? 'open' : ''}>
      {menu.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </BurgerNavStyles>
  );
};

export default BugerNav;
