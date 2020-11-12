import React from 'react';
import Image from 'gatsby-image';
import SkewWrapper from '../SkewWrapper';
import './course.scss';

const Course = ({ course }) => (
  <div className="course">
    <div>
      <Image
        className="course__image"
        fluid={course.elements.summary_image.value[0].fluid}
        alt={course.elements.summary_image.value[0].description}
      />
      <div>
        <h3 className="course__title">{course.elements.title.value}</h3>
        <p className="course__text">{course.elements.summary.value}</p>
        <p className="course__text">
          {course.elements.dates.value.split('\n').map((item) => (
            <span key={item}>
              {item}
              <br />
            </span>
          ))}
        </p>
        <p className="course__text">{course.elements.cost.value}</p>
      </div>
    </div>
    <div className="course__cta">
      <a href="/" className="cta">
        <SkewWrapper>More details</SkewWrapper>
      </a>
    </div>
  </div>
);

export default Course;
