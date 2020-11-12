import React from 'react';
import { Link } from 'gatsby';
import { RichTextElement } from '@kentico/gatsby-kontent-components';
import './subjectAreasListing.scss';
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

const SubjectAreasListing = ({ title, subjectAreas }) => (
  <div className="main-wrapper__width-90 subject-areas-listing">
    <h2 className="subject-areas-listing__title">{title}</h2>
    <div className="grid grid--gutters grid--full large-grid--fit">
      {subjectAreas &&
        subjectAreas.map((subject) => (
          <div
            key={subject.system.codename}
            className="grid-cell subject-areas-listing__cell"
          >
            <Link to={`/${subject.elements.url.value}`}>
              <span className="subject-areas-listing__icon">
                <img
                  src={getIcon(subject.elements.title.value)}
                  width="60px"
                  height="60px"
                  alt={subject.elements.title.value}
                />
              </span>
            </Link>
            <h3 className="subject-areas-listing__subject-title">
              {subject.elements.title.value}
            </h3>
            <RichTextElement value={subject.elements.summary.value} />
            <p>
              <Link
                className="subject-areas-listing__link cta-secondary"
                to={`/${subject.elements.url.value}`}
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
