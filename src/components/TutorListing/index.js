/* eslint-disable comma-dangle */
import React from 'react';
import { RichTextElement } from '@kentico/gatsby-kontent-components';
import Image from 'gatsby-image';
import SkewWrapper from '../SkewWrapper';
import './tutorListing.scss';

const TeachingProvision = ({ teachingProvision }) => {
  const groupedBySubject = {};
  teachingProvision.forEach((subjectOption) => {
    const subject =
      subjectOption.elements.subject.value[0].elements.title.value;
    const keyStage =
      subjectOption.elements.key_stage.value[0].elements.title.value;
    if (subject in groupedBySubject) {
      groupedBySubject[subject].push(keyStage);
    } else {
      groupedBySubject[subject] = [keyStage];
    }
  });

  return Object.keys(groupedBySubject).map((subject) => (
    <div key={subject} className="tutorListing__provisionSubject">
      <span className="tutorListing__provisionSubjectTitle">{subject}:</span>
      {groupedBySubject[subject].map((keyStage) => (
        <span key={keyStage} className="tutorListing__provisionSubjectKeyStage">
          <SkewWrapper>{keyStage}</SkewWrapper>
        </span>
      ))}
    </div>
  ));
};

const TutorListing = ({ tutors }) => (
  <div className="tutorListing">
    <div className="grid grid--gutters grid--full large-grid--fit">
      {tutors &&
        tutors.map((tutor) => (
          <div key={tutor.id} className="grid-cell">
            <div className="tutorlisting__">
              <Image
                className="tutorListing__image"
                fluid={tutor.elements.profile_picture.value[0].fluid}
                alt={tutor.elements.profile_picture.value[0].description}
              />
            </div>
            <h3 className="tutorListing__title">
              {tutor.elements.tutor_name.value}
            </h3>
            <RichTextElement value={tutor.elements.introduction.value} />
            <h3 className="tutorListing__title">
              {`Subjects Offered By ${tutor.elements.tutor_name.value}:`}
            </h3>
            <div className="tutorListing__provision">
              <TeachingProvision
                teachingProvision={tutor.elements.teaching_provision.value}
              />
            </div>
          </div>
        ))}
    </div>
  </div>
);

export default TutorListing;
