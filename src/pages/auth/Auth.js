import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Title from '../../components/shared/Title';
import WithScrollIntoView from '../../components/shared/WithScrollIntoView';
import signup from '../../data/images/signup.svg';
import signin from '../../data/images/signin.svg';

const Authentication = () => {
  const [illustration, setIllustration] = useState(signin);
  const [title, setTitle] = useState('Log into your account!');
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    if (pathname === 'auth/signup') {
      setIllustration(signup);
      setTitle('Join the community!');
    }
  }, [pathname]);

  return (
    <section
      className="w-full flex flex-col items-center justify-center"
      data-theme="light"
    >
      <div className="mx-auto my-8 w-10/12 lg:w-4/5 self-center flex flex-col lg:flex-row items-center   justify-center gap-4">
        <div className="w-full object-contain">
          <img
            src={illustration}
            className="aspect-auto w-full"
            alt={`${illustration} vector`}
          />
        </div>
        <div className="w-full flex-col items-center gap-4">
          <Title>{title}</Title>
          <div className="mt-10">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WithScrollIntoView(Authentication);
