import React from 'react';
import { Link } from 'gatsby';
import { RichTextElement } from '@kentico/gatsby-kontent-components';
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
        <div className="course__text">
          <RichTextElement value={course.elements.introduction.value} />
        </div>
        <div className="course__text">
          <p>
            {course.elements.dates.value.split('\n').map((item) => (
              <span key={item}>
                {item}
                <br />
              </span>
            ))}
          </p>
        </div>
        <div className="course__text">
          <p>{course.elements.cost.value}</p>
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

export default Course;
