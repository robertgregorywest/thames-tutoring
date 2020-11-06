import React from 'react';
import PropTypes from 'prop-types';
import './skewWrapper.scss';

const SkewWrapper = ({ skew, children }) => {
  if (skew) {
    return (
      <span className="skewWrapper">
        <span className="skewWrapper__text">{children}</span>
      </span>
    );
  }
  return <>{children}</>;
};

SkewWrapper.propTypes = {
  skew: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

SkewWrapper.defaultProps = {
  skew: true,
};

export default SkewWrapper;
