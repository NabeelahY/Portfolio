import React, { useState } from 'react';
import { NavStyles } from './styles/Nav';
import BurgerNav from './BurgerNav';

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <NavStyles>
      <button
        className="menuBtn"
        type="button"
        aria-label="Menu button"
        onClick={() => setOpen(!open)}
      >
        <span className={open ? 'bar active' : 'bar'}></span>
        <span className={open ? 'bar active' : 'bar'}></span>
        <span className={open ? 'bar active' : 'bar'}></span>
      </button>
      <BurgerNav open={open} />
    </NavStyles>
  );
};

export default Nav;
