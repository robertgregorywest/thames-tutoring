import React from 'react';
// import PropTypes from 'prop-types';
import Image from 'gatsby-image';
import SkewWrapper from '../SkewWrapper';
import './course.scss';

const Course = ({ course }) => (
  <div key={course.system.codename} className="grid-cell course__card">
    <div>
      <Image
        className="course__image"
        fluid={course.elements.summary_image.value[0].fluid}
        alt={course.elements.summary_image.value[0].description}
      />
      <div>
        <h3 className="course__title">{course.elements.title.value}</h3>
        <p>{course.elements.summary.value}</p>
        <p>
          {course.elements.dates.value.split('\n').map((item) => (
            <span key={item}>
              {item}
              <br />
            </span>
          ))}
        </p>
        <p>{course.elements.cost.value}</p>
      </div>
    </div>
    <div className="course__cta">
      <a href="/" className="cta">
        <SkewWrapper>More details</SkewWrapper>
      </a>
    </div>
  </div>
);

// Course.propTypes = {
//   title: PropTypes.string.isRequired,
//   cost: PropTypes.string.isRequired,
//   unit: PropTypes.string.isRequired,
//   details: PropTypes.string.isRequired,
//   cta: PropTypes.string,
// };

// Course.defaultProps = {
//   cta: 'Sign up',
// };

export default Course;
