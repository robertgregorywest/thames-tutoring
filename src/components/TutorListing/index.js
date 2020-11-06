/* eslint-disable comma-dangle */
import React from 'react';
import { RichTextElement } from '@kentico/gatsby-kontent-components';
import Image from 'gatsby-image';
import SkewWrapper from '../SkewWrapper';
import './tutorListing.scss';

const TutorListing = ({ tutors }) => (
  <div className="tutorListing">
    <div className="grid grid--gutters grid--full large-grid--fit">
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
              {tutor.elements.teaching_provision.value.map((subjectOption) => (
                <li
                  key={subjectOption.id}
                  className="tutorListing__provisionItem"
                >
                  <SkewWrapper hover={false}>
                    {subjectOption.elements.title.value}
                  </SkewWrapper>
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  </div>
);

export default TutorListing;
