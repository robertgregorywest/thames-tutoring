import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import SkewWrapper from '../SkewWrapper';

const MenuItem = ({
  to,
  text,
  onClickHandler,
  skew,
  itemClassName,
  linkClassName,
  children,
}) => {
  let link;
  if (onClickHandler) {
    link = (
      <a
        href="#"
        className={`site-head__link ${linkClassName}`}
        onClick={onClickHandler}
      >
        <SkewWrapper skew={skew}>{text}</SkewWrapper>
      </a>
    );
  } else {
    link = (
      <Link to={to} className={`site-head__link ${linkClassName}`}>
        <SkewWrapper skew={skew}>{text}</SkewWrapper>
      </Link>
    );
  }
  return (
    <li role="menuitem" className={`site-head__nav-item ${itemClassName}`}>
      {link}
      {children}
    </li>
  );
};

MenuItem.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  skew: PropTypes.bool,
  itemClassName: PropTypes.string,
  linkClassName: PropTypes.string,
};

MenuItem.defaultProps = {
  skew: false,
  itemClassName: '',
  linkClassName: '',
};

export default MenuItem;
