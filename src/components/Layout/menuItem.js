import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const MenuItem = ({ to, text, onClickHandler, linkClassName, children }) => {
  let link;
  if (onClickHandler) {
    link = (
      <a
        href="#"
        className={`site-head__link ${linkClassName}`}
        onClick={onClickHandler}
      >
        {text}
      </a>
    );
  } else {
    link = (
      <Link to={to} className={`site-head__link ${linkClassName}`}>
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

MenuItem.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  linkClassName: PropTypes.string,
};

MenuItem.defaultProps = {
  linkClassName: '',
};

export default MenuItem;
