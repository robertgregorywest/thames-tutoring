import React from 'react';
import Image from 'gatsby-image';
import './style.scss';

const CourseListing = ({ featuredCourses }) => (
  <div className="course-listing">
    <h2 className="course-listing__title">Latest Courses</h2>
    <div className="flex-grid-thirds">
      {featuredCourses &&
        featuredCourses.map((course) => (
          <div className="col course-listing__card">
            <div className="course-listing__upper">
              <figure className="course-listing__figure">
                <Image
                  className="course-listing__image"
                  fluid={course.elements.summary_image.value[0].fluid}
                  alt={course.elements.summary_image.value[0].description}
                />
              </figure>
              <div className="course-listing__details">
                <h3 className="course-listing__course-title">
                  {course.elements.title.value}
                </h3>
                <p>{course.elements.summary.value}</p>
                <p>{course.elements.cost.value}</p>
              </div>
            </div>
            <div className="course-listing__cta">
              <a href="/" className="cta">
                More details
              </a>
            </div>
          </div>
        ))}
    </div>
  </div>
);

export default CourseListing;
