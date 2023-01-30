/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from './Spinner';
import Error from './Error';

const WithObserverFetch = (WrappedComponent, fetchAction, selector, props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state[selector]);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const { status, error } = state;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      });
    });
    observer.observe(document.querySelector('[data-hook="with-data"]'));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isIntersecting && status === 'idle') {
      dispatch(fetchAction());
    }
  }, [isIntersecting, status, dispatch, fetchAction]);

  return (
    <>
      {status === 'loading' && (
      <Spinner containerStyle={{ height: '38rem' }} />
      )}
      <div data-hook="with-data">
        {status === 'completed' && <WrappedComponent {...props} />}
        {status === 'failed' && <Error error={error} />}
      </div>
    </>
  );
};

export default WithObserverFetch;
