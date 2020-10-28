import React from 'react';
import { Link } from 'gatsby';

const MenuItem = ({ to, text, onClickHandler, linkClassName, children }) => {
  let link;
  if (onClickHandler) {
    link = (
      <a
        href="#"
        className={`site-head__link${linkClassName ? ` ${linkClassName}` : ''}`}
        onClick={onClickHandler}
      >
        {text}
      </a>
    );
  } else {
    link = (
      <Link
        to={to}
        className={`site-head__link${linkClassName ? ` ${linkClassName}` : ''}`}
      >
        {text}
      </Link>
    );
  }
  return (
    <li role="menuitem" className="site-head__nav-item">
      {link}
      {children}
    </li>
  );
};

export default MenuItem;
