import React from 'react';
import { graphql, Link } from 'gatsby';
import { RichTextElement } from '@kentico/gatsby-kontent-components';
import Image from 'gatsby-image';
import SkewWrapper from '../SkewWrapper';
import './course.scss';
import abacus from '../../assets/icons/abacus-red.svg';
import flask from '../../assets/icons/flask-red.svg';
import book from '../../assets/icons/book-open-red.svg';
import dna from '../../assets/icons/dna.svg';
import calendar from '../../assets/icons/calendar.svg';
import pin from '../../assets/icons/location.svg';
import atom from '../../assets/icons/atom.svg';

function getIcon(subjectOption) {
  switch (subjectOption.substr(0, subjectOption.indexOf(' ')).toLowerCase()) {
    case 'biology':
      return dna;
    case 'chemistry':
      return flask;
    case 'physics':
      return atom;
    case 'science':
      return flask;
    case 'english':
      return book;
    default:
      return abacus;
  }
}

const formatDate = (date) =>
  new Date(date).toLocaleDateString('en-gb', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

const Course = ({ course }) => {
  const startDate = formatDate(course.elements.start_date.value);
  const endDate = formatDate(course.elements.end_date.value);
  const courseDates =
    startDate === endDate ? startDate : `${startDate} - ${endDate}`;

  const subject = course.elements.subject_option.value[0].elements.title.value;
  return (
    <div className="course">
      <div>
        <Image
          className="course__image"
          fluid={course.elements.summary_image.value[0].fluid}
          alt={course.elements.summary_image.value[0].description}
        />
        <div>
          <h3 className="course__title">{course.elements.title.value}</h3>
          <div className="course__details-grid">
            <div>
              <img
                src={getIcon(subject)}
                width="25px"
                height="25px"
                alt={subject}
              />
            </div>
            <div className="course__details-text">{subject}</div>
          </div>
          <div className="course__details-grid">
            <div>
              <img
                src={calendar}
                width="25px"
                height="25px"
                alt="Calendar icon"
              />
            </div>
            <div className="course__details-text">{courseDates}</div>
          </div>
          <div className="course__details-grid">
            <div>
              <img src={pin} width="25px" height="25px" alt="Location icon" />
            </div>
            <div className="course__details-text">
              {course.elements.location.value}
            </div>
          </div>
          <div className="course__text">
            <RichTextElement value={course.elements.introduction.value} />
          </div>
        </div>
      </div>
      <div className="course__cta">
        <Link to={`/course/${course.elements.url.value}`} className="cta">
          <SkewWrapper>More details</SkewWrapper>
        </Link>
      </div>
    </div>
  );
};

export const fragmentQuery = graphql`
  fragment CourseInfo on kontent_item_course {
    id
    system {
      codename
      type
    }
    elements {
      title {
        value
      }
      summary_image {
        value {
          fluid(maxWidth: 500) {
            ...KontentAssetFluid
          }
          description
        }
      }
      introduction {
        value
      }
      url {
        value
      }
      start_date {
        value
      }
      end_date {
        value
      }
      location {
        value
      }
      cost {
        value
      }
      subject_option {
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

export default Course;
