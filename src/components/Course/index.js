import React from 'react';
import { graphql, Link } from 'gatsby';
import { RichTextElement } from '@kentico/gatsby-kontent-components';
import Image from 'gatsby-image';
import SkewWrapper from '../SkewWrapper';
import './course.scss';
import calendar from '../../assets/icons/calendar.svg';
import pin from '../../assets/icons/location.svg';

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
