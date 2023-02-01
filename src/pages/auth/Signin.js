import React from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import CustomForm from '../../components/shared/CustomForm';
import FormInput from '../../components/shared/FormInput';
import { login } from '../../redux/user/user';

const Signin = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if (!values.password) {
          errors.password = 'Required';
        }
        return errors;
      }}
      onSubmit={(values, { resetForm }) => {
        dispatch(login(values));
        resetForm();
      }}
    >
      <>
        <CustomForm id="signin-form">
          <FormInput type="email" name="email" placeholder="Email" />
          <FormInput type="password" name="password" placeholder="Password" />
          <FormInput type="checkbox" name="remember_me" placeholder="Remember me" />
        </CustomForm>
        <button
          form="signin-form"
          type="submit"
          className="w-32 h-12 flex ml-2 hover:shadow-xl mt-8 items-center justify-center px-4 py-2 bg-red-500 text-white uppercase skew-x-[-20deg] font-semibold"
        >
          <span className="block skew-x-[20deg]">Sign in</span>
        </button>
      </>
    </Formik>
  );
};

export default Signin;
