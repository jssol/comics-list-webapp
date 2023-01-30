import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function Link({
  to, children, className, onClick,
}) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={`transition-all duration-200 ${className}`}
    >
      {children}
    </NavLink>
  );
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Link.defaultProps = {
  className: '',
  onClick: () => {},
};

export default Link;
