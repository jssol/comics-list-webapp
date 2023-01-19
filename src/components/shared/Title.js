import React from 'react';
import PropTypes from 'prop-types';
import './Title.scss';

const Title = ({ children, className }) => (<h2 className={`Title ${className}`}>{children}</h2>);

Title.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
};

Title.defaultProps = {
  className: 'mt-8 font-bold uppercase',
};

export default Title;
