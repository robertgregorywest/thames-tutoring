import React from 'react';
import { graphql } from 'gatsby';
import { RichTextElement } from '@kentico/gatsby-kontent-components';
import Image from 'gatsby-image';
import SkewWrapper from '../SkewWrapper';
import './tutorListing.scss';

const TutorListing = ({ tutors }) => {
  const gridColumns = tutors.length > 2 ? 3 : 2;
  return (
    <div className="main-wrapper__width-90 tutorListing">
      <div
        className={`grid grid--gutters grid--full small-grid--1of2 large-grid--1of${gridColumns}`}
      >
        {tutors &&
          tutors.map((tutor) => (
            <div key={tutor.id} className="grid-cell">
              <div className="tutorlisting__">
                <Image
                  className="tutorListing__image"
                  fluid={tutor.elements.summary_picture.value[0].fluid}
                  alt={tutor.elements.summary_picture.value[0].description}
                />
              </div>
              <h3 className="tutorListing__title">
                {tutor.elements.tutor_name.value}
              </h3>
              <RichTextElement value={tutor.elements.introduction.value} />
              <h3 className="tutorListing__provisionTitle">Subjects Offered</h3>
              <ul className="tutorListing__provisionList">
                {tutor.elements.teaching_provision.value.map(
                  (subjectOption) => (
                    <li
                      key={subjectOption.id}
                      className="tutorListing__provisionItem"
                    >
                      <SkewWrapper hover={false}>
                        {subjectOption.elements.title.value}
                      </SkewWrapper>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
};

export const fragmentQuery = graphql`
  fragment TutorListingInfo on kontent_item_tutor {
    id
    elements {
      tutor_name {
        value
      }
      introduction {
        value
      }
      summary_picture {
        value {
          fluid(maxWidth: 500) {
            ...KontentAssetFluid
          }
          description
        }
      }
      teaching_provision {
        value {
          ... on kontent_item_subject_option {
            id
            elements {
              title {
                value
              }
            }
          }
        }
      }
    }
  }
`;

export default TutorListing;
