import React from 'react';
import PropTypes from 'prop-types';
import './shapeSection.scss';

export const gradients = {
  ORANGE: 'orange',
  BLUE: 'blue',
  PURPLE: 'purple',
  YELLOW: 'yellow',
  GREEN: 'green',
};

// alt for purple from-fuchsia-500 to-purple-600 from-purple-500 to-indigo-500
// from-lime-300 to-emerald-500
const ShapeSection = ({ children, flippedTop, flippedBottom, gradient }) => {
  const gradientStyle = () => {
    switch (gradient) {
      case gradients.BLUE:
        return 'from-light-blue-400 to-indigo-500';
      case gradients.PURPLE:
        return 'from-fuchsia-500 to-purple-600';
      case gradients.YELLOW:
        return 'from-yellow-400 to-orange-500';
      case gradients.GREEN:
        return 'from-green-400 to-cyan-500';
      default:
        return 'from-orange-400 to-pink-600';
    }
  };
  return (
    <div
      className={`main-wrapper__full shapeSection bg-gradient-to-br ${gradientStyle()}`}
    >
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
    </div>
  );
};

ShapeSection.propTypes = {
  children: PropTypes.node.isRequired,
  flippedTop: PropTypes.bool,
  flippedBottom: PropTypes.bool,
  gradient: PropTypes.string,
};

ShapeSection.defaultProps = {
  flippedTop: false,
  flippedBottom: false,
  gradient: gradients.ORANGE,
};

export default ShapeSection;
