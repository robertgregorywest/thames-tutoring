import React from 'react';
import './style.scss';

const SubjectAreasListing = ({ subjectAreas }) => (
  <div className="subject-areas-listing">
    <h2 className="subject-areas-listing__title">What We Cover</h2>
    <div className="flex-grid-thirds">
      {subjectAreas &&
        subjectAreas.map((subject) => (
          <div className="col">
            <div className="subject-areas-listing__details">
              <h3 className="subject-areas-listing__subject-title">
                {subject.elements.title.value}
              </h3>
              <p>{subject.elements.summary.value}</p>
            </div>
          </div>
        ))}
    </div>
    <p className="subject-areas-listing__cta">
      <a href="/" className="cta">
        Learn more
      </a>
    </p>
  </div>
);

export default SubjectAreasListing;
