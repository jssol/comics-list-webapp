import React from 'react';
import { Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';

const FormInput = (props) => {
  const { type, name, placeholder } = props;
  return (
    <>
      <Field type={type} name={name} placeholder={placeholder} />
      <ErrorMessage name={name} component="div" />
    </>
  );
};

FormInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default FormInput;
