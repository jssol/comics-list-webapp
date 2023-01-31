import React from 'react';
import { Form } from 'formik';
import PropTypes from 'prop-types';

const CustomForm = ({ id, children }) => (
  <Form id={id} className="shadow-xl rounded-b-lg overflow-hidden">
    {children}
  </Form>
);

CustomForm.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default CustomForm;
