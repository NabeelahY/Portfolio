import React from 'react';
import { Link } from 'react-scroll';
import { BurgerNavStyles } from './styles/Nav';

const BugerNav: React.FC<{ open: any }> = ({ open }) => {
  const menu = ['Stack', 'Projects', 'Contact'];
  return (
    <BurgerNavStyles className={open ? 'open' : ''}>
      {menu.map((item, idx) => (
        <li key={idx}>
          <Link
            activeClass="active"
            to={item}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            {item}
          </Link>
        </li>
      ))}
    </BurgerNavStyles>
  );
};

export default BugerNav;
