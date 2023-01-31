import React from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import CustomForm from '../../components/shared/CustomForm';
import FormInput from '../../components/shared/FormInput';
import { signup } from '../../redux/user/user';

const SignupForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={(values) => {
        const errors = {};
        if (!values.first_name) {
          errors.first_name = 'Required';
        }
        if (!values.last_name) {
          errors.last_name = 'Required';
        }
        if (!values.username) {
          errors.username = 'Required';
        }
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
        if (!values.password_confimation) {
          errors.password_confimation = 'Required';
        }
        if (values.password !== values.password_confimation) {
          errors.password_confimation = "Passwords don't match";
        }
        return errors;
      }}
      onSubmit={(values) => {
        dispatch(signup(values));
      }}
    >
      <>
        <CustomForm
          id="signup-form"
        >
          <FormInput type="input" name="first_name" placeholder="First" />
          <FormInput type="input" name="last_name" placeholder="Last" />
          <FormInput type="input" name="username" placeholder="Username" />
          <FormInput type="email" name="email" placeholder="Email" />
          <FormInput type="password" name="password" placeholder="Password" />
          <FormInput
            type="password"
            name="password_confirmation"
            placeholder="Confirm Password"
          />
        </CustomForm>
        <button
          htmlFor="signup-form"
          type="submit"
          className="w-32 h-12 flex ml-2 hover:shadow-xl mt-8 items-center justify-center px-4 py-2 bg-red-500 text-white uppercase skew-x-[-20deg] font-semibold"
        >
          <span className="block skew-x-[20deg]">Sign up</span>
        </button>
      </>
    </Formik>
  );
};

export default SignupForm;
