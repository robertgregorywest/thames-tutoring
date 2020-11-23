import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import SubjectIcon from '../SubjectIcon';

const MenuItemDropdown = ({ to, title, text }) => (
  <li role="menuitem" className="menu-dropdown__nav-item">
    <Link to={to} className="site-head__link">
      <div className="menu-dropdown__container">
        <div className="menu-dropdown__icon">
          <SubjectIcon title={title} backgroundSize="40px" iconSize="20px" />
        </div>
        <div className="menu-dropdown__text">
          <span>{title}</span>
          <p className="menu-dropdown__summary">{text}</p>
        </div>
      </div>
    </Link>
  </li>
);

MenuItemDropdown.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default MenuItemDropdown;
