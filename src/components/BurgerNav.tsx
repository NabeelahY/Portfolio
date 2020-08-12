import React from 'react';
import { Link } from 'react-scroll';
import { BurgerNavStyles } from './styles/Nav';

const BurgerNav: React.FC<{ open: any }> = ({ open }) => {
  const menu = ['Stacks', 'Projects', 'Contact'];
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

export default BurgerNav;
