import React from 'react';

const Hamburger = ({ onClickHandler }) => (
  <a className="nav-burger" href="#" onClick={onClickHandler}>
    <div
      className="hamburger hamburger--collapse"
      aria-label="Menu"
      role="button"
      aria-controls="navigation"
    >
      <div className="hamburger-box">
        <div className="hamburger-inner" />
      </div>
    </div>
  </a>
);

export default Hamburger;
