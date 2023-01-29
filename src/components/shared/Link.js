import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function Link({ to, children, className }) {
  return (
    <NavLink to={to} className={className}>
      {children}
    </NavLink>
  );
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Link.defaultProps = {
  className: '',
};

export default Link;
