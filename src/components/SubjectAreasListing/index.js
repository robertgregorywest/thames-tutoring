import React from 'react';
import './subjectAreasListing.scss';
import abacus from '../../assets/icons/abacus.svg';

const SubjectAreasListing = ({ subjectAreas }) => (
  <div className="subject-areas-listing">
    <h2 className="subject-areas-listing__title">What We Cover</h2>
    <div className="grid grid--gutters grid--full large-grid--fit">
      {subjectAreas &&
        subjectAreas.map((subject) => (
          <div className="grid-cell">
            <div className="subject-areas-listing__icon">
              <img src={abacus} width="60px" height="60px" alt="" />
            </div>
            <h3 className="subject-areas-listing__subject-title">
              {subject.elements.title.value}
            </h3>
            <p>{subject.elements.summary.value}</p>
            <p>
              <a href="/" className="subject-areas-listing__link cta-secondary">
                Learn more about {subject.elements.title.value.toLowerCase()}
              </a>
            </p>
          </div>
        ))}
    </div>
  </div>
);

export default SubjectAreasListing;
