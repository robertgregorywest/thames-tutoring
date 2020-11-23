import React from 'react';
import { Link, graphql } from 'gatsby';
import { RichTextElement } from '@kentico/gatsby-kontent-components';
import SubjectIcon from '../SubjectIcon';
import './subjectAreasListing.scss';

function getLinkStyle(subjectArea) {
  switch (subjectArea.toLowerCase()) {
    case 'science tuition':
      return 'cta-secondary--blue';
    case 'english tuition':
      return 'cta-secondary--yellow';
    default:
      return 'cta-secondary--green';
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
              <SubjectIcon
                title={subject.elements.title.value}
                backgroundSize="100px"
                iconSize="60px"
              />
            </Link>
            <h3 className="subject-areas-listing__subject-title">
              {subject.elements.title.value}
            </h3>
            <RichTextElement value={subject.elements.summary.value} />
            <p>
              <Link
                className={`subject-areas-listing__link cta-secondary ${getLinkStyle(
                  subject.elements.title.value
                )}`}
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

export const fragmentQuery = graphql`
  fragment SubjectAreasListingInfo on kontent_item_subject_area {
    id
    elements {
      title {
        value
      }
      summary {
        value
      }
      url {
        value
      }
    }
    system {
      codename
      type
    }
  }
`;

export default SubjectAreasListing;
