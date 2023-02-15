import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const userState = useSelector((state) => state.user);

  const { user: { first_name: fName } } = userState;

  return (
    <div>{fName}</div>
  );
};

export default Dashboard;
