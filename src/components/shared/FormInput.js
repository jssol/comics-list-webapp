import React from 'react';
import { Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import './FormInput.scss';

const FormInput = (props) => {
  const { type, name, placeholder } = props;
  return (
    <div className="w-full h-auto flex flex-col border-b-2 transition-all last:border-none border-b-current focus-within:border-b-red-500">
      <p className="mx-4 my-2 font-semibold">{placeholder}</p>
      <div className="w-full h-10 flex items-center justify-center relative">
        <Field
          type={type}
          className="Field bg-transparent w-full h-full relative focus:outline-none px-4 py-2"
          name={name}
          placeholder={placeholder}
          autoComplete="off"
        />
        <ErrorMessage
          className="bg-transparent absolute right-4 text-red-500 top-0 flex items-center justify-center bottom-0"
          name={name}
          component="div"
        />
      </div>
    </div>
  );
};

FormInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default FormInput;
