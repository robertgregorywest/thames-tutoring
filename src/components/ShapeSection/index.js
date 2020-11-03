import React from 'react';
import PropTypes from 'prop-types';
import './shapeSection.scss';

const ShapeSection = ({ children, flippedTop, flippedBottom }) => (
  <>
    <div
      className={`shapeSection__divider-top${
        flippedTop ? ' shapeSection__divider-top--flipped' : ''
      }`}
    >
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path
          d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
          className="shape-fill"
        />
      </svg>
    </div>
    {children}
    <div
      className={`shapeSection__divider-bottom${
        flippedBottom ? ' shapeSection__divider-bottom--flipped' : ''
      }`}
    >
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path
          d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
          className="shape-fill"
        />
      </svg>
    </div>
  </>
);

ShapeSection.propTypes = {
  children: PropTypes.node.isRequired,
  flippedTop: PropTypes.bool,
  flippedBottom: PropTypes.bool,
};

ShapeSection.defaultProps = {
  flippedTop: false,
  flippedBottom: false,
};

export default ShapeSection;
