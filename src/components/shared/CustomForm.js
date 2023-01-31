import React from 'react';
import { Form } from 'formik';
import PropTypes from 'prop-types';

const CustomForm = ({ id, children }) => (
  <Form id={id} data-theme="light" autoComplete="off" className="shadow-xl bg-neutral text-white rounded-b-lg overflow-hidden">
    {children}
  </Form>
);

CustomForm.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default CustomForm;
