import React, { useState } from 'react';
import { NavStyles } from './styles/Nav';
import BugerNav from './BugerNav';

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <NavStyles>
      <button className="menuBtn" type="button" onClick={() => setOpen(!open)}>
        <span className={open ? 'bar active' : 'bar'}></span>
        <span className={open ? 'bar active' : 'bar'}></span>
        <span className={open ? 'bar active' : 'bar'}></span>
      </button>
      <BugerNav open={open} />
    </NavStyles>
  );
};

export default Nav;
