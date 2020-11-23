import React from 'react';
import abacus from '../../assets/icons/abacus.svg';
import flask from '../../assets/icons/flask.svg';
import book from '../../assets/icons/book-open.svg';
import './subjectIcon.scss';

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

function getBackground(subjectArea) {
  switch (subjectArea.toLowerCase()) {
    case 'science tuition':
      return 'from-light-blue-400 to-indigo-500';
    case 'english tuition':
      return 'from-yellow-400 to-orange-500';
    default:
      return 'from-green-400 to-cyan-500';
  }
}

const SubjectIcon = ({ title, backgroundSize, iconSize }) => (
  <span
    className={`subject-icon bg-gradient-to-br ${getBackground(title)}`}
    style={{ width: backgroundSize, height: backgroundSize }}
  >
    <img
      src={getIcon(title)}
      width={iconSize}
      height={iconSize}
      alt={backgroundSize}
    />
  </span>
);
export default SubjectIcon;
