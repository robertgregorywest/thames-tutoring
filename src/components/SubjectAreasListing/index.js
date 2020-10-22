import React from 'react';
import { Link } from 'gatsby';
import './subjectAreasListing.scss';
import abacus from '../../assets/icons/abacus.svg';
import flask from '../../assets/icons/flask.svg';
import book from '../../assets/icons/book-open.svg';

function getIcon(subjectArea) {
  switch (subjectArea) {
    case 'science tuition':
      return flask;
    case 'english tuition':
      return book;
    default:
      return abacus;
  }
}

const SubjectAreasListing = ({ title, subjectAreas }) => (
  <div className="subject-areas-listing">
    <h2 className="subject-areas-listing__title">{title}</h2>
    <div className="grid grid--gutters grid--full large-grid--fit">
      {subjectAreas &&
        subjectAreas.map((subject) => (
          <div className="grid-cell subject-areas-listing__cell">
            <div className="subject-areas-listing__icon">
              <img
                src={getIcon(subject.elements.title.value.toLowerCase())}
                width="60px"
                height="60px"
                alt=""
              />
            </div>
            <h3 className="subject-areas-listing__subject-title">
              {subject.elements.title.value}
            </h3>
            <p>{subject.elements.summary.value}</p>
            <p>
              <Link
                className="subject-areas-listing__link cta-secondary"
                to={`/tuition/${subject.system.codename}`}
              >
                Learn more about {subject.elements.title.value}
              </Link>
            </p>
          </div>
        ))}
    </div>
  </div>
);

export default SubjectAreasListing;
