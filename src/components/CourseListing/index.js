import React from 'react';
import Course from '../Course';
import './courseListing.scss';

const CourseListing = ({ title, featuredCourses }) => (
  <div className="main-wrapper__width-90 course-listing">
    <h2 className="course-listing__title">{title}</h2>
    <div className="grid grid--gutters grid--full large-grid--fit">
      {featuredCourses &&
        featuredCourses.map((course) => (
          <div key={course.system.codename} className="grid-cell">
            <Course course={course} />
          </div>
        ))}
    </div>
  </div>
);

export default CourseListing;
