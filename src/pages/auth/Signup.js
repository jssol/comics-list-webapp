import React from 'react';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import { useDispatch } from 'react-redux';
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
        return errors;
      }}
      onSubmit={(values) => {
        dispatch(signup(JSON.stringify(values, null, 2)));
      }}
    >
      <Form>
        <Field type="input" name="first_name" placeholder="Fist" />
        <ErrorMessage name="first_name" component="div" />
        <Field type="input" name="last_name" placeholder="Last" />
        <ErrorMessage name="last_name" component="div" />
        <Field type="input" name="username" placeholder="@username" />
        <ErrorMessage name="username" component="div" />
        <Field type="email" name="email" placeholder="Email" />
        <ErrorMessage name="email" component="div" />
        <Field type="password" name="password" placeholder="Password" />
        <ErrorMessage name="password" component="div" />
        <button
          type="submit"
          className="w-32 h-12 flex ml-2 hover:shadow-xl mt-4 items-center justify-center px-4 py-2 bg-red-500 text-white uppercase skew-x-[-20deg] font-semibold"
        >
          <span className="block skew-x-[20deg]">Sign up</span>
        </button>
      </Form>
    </Formik>
  );
};

export default SignupForm;
