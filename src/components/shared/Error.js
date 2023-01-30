import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ error }) => (
  <p className="text-red-500 p-4 font-semibold self-center my-0 mx-auto">{error}</p>
);

Error.propTypes = {
  error: PropTypes.string.isRequired,
};

export default Error;
