/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from './Spinner';
import Error from './Error';

const WithObserverFetch = (
  WrappedComponent,
  fetchAction,
  selector,
) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state[selector]);

  const { status, error } = state;

  useEffect(() => {
    dispatch(fetchAction());
  }, [dispatch, fetchAction]);

  return (
    <>
      {status === 'loading' && <Spinner containerStyle={{ height: '38rem' }} />}
      {status === 'completed' && <WrappedComponent key={selector} />}
      {status === 'failed' && <Error error={error} />}
    </>
  );
};

export default WithObserverFetch;
