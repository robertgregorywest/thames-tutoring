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

const MenuItemDropdown = ({ to, text }) => (
  <li role="menuitem" className="menu-dropdown__nav-item">
    <Link to={to} className="site-head__link">
      <div className="menu-dropdown__container">
        <div className="menu-dropdown__icon">
          <img src={getIcon(text)} width="25px" height="25px" alt={text} />
        </div>
        <div className="menu-dropdown__text">
          <span>{text}</span>
          <p className="menu-dropdown__summary">
            We provide 1-2-1 and small group tuition in Maths for all abilities.
          </p>
        </div>
      </div>
    </Link>
  </li>
);

MenuItemDropdown.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default MenuItemDropdown;
