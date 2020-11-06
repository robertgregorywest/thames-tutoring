import React from 'react';
import PropTypes from 'prop-types';
import './skewWrapper.scss';

const SkewWrapper = ({ skew, hover, children }) => {
  if (skew) {
    return (
      <span className={`skewWrapper${hover ? ' skewWrapper--hover' : ''}`}>
        <span className="skewWrapper__text">{children}</span>
      </span>
    );
  }
  return <>{children}</>;
};

SkewWrapper.propTypes = {
  skew: PropTypes.bool,
  hover: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

SkewWrapper.defaultProps = {
  skew: true,
  hover: true,
};

export default SkewWrapper;
