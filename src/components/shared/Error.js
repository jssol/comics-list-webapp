import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ error, className }) => (
  <p className={className}>{error}</p>
);

Error.propTypes = {
  error: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Error.defaultProps = {
  className:
    'w-10/12 lg:w-4/5 h-[28rem] lg:h-[38rem] flex items-center justify-center p-5 text-gray-400 text-red-500 font-semibold self-center my-0 mx-auto',
};

export default Error;
