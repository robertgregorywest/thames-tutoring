import React from 'react';
import './subjectAreasListing.scss';

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
              <p>
                <a
                  href="/"
                  className="subject-areas-listing__link cta-secondary"
                >
                  Learn more about {subject.elements.title.value.toLowerCase()}
                </a>
              </p>
            </div>
          </div>
        ))}
    </div>
  </div>
);

export default SubjectAreasListing;
