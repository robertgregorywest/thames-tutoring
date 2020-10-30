import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import abacus from '../../assets/icons/abacus.svg';
import flask from '../../assets/icons/flask.svg';
import book from '../../assets/icons/book-open.svg';

function getIcon(subjectArea) {
  switch (subjectArea.toLowerCase()) {
    case 'science tuition':
      return flask;
    case 'english tuition':
      return book;
    default:
      return abacus;
  }
}

const MenuItemDropdown = ({ to, title, text }) => (
  <li role="menuitem" className="menu-dropdown__nav-item">
    <Link to={to} className="site-head__link">
      <div className="menu-dropdown__container">
        <div className="menu-dropdown__icon">
          <img src={getIcon(title)} width="20px" height="20px" alt={text} />
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
