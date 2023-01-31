import React, { useState, useMemo } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Link from '../../components/shared/Link';
import Title from '../../components/shared/Title';
import WithScrollIntoView from '../../components/shared/WithScrollIntoView';
import signup from '../../data/images/signup.svg';
import signin from '../../data/images/signin.svg';

const Authentication = () => {
  const [illustration, setIllustration] = useState(signin);
  const [title, setTitle] = useState('Sign into your account!');
  const [activeLink, setActiveLink] = useState('signin');
  const location = useLocation();
  const { pathname } = location;

  useMemo(() => {
    if (pathname === '/auth/signup') {
      setIllustration(signup);
      setTitle('Join the community!');
      setActiveLink('signup');
    } else {
      setIllustration(signin);
      setTitle('Sign into your account!');
      setActiveLink('signin');
    }
  }, [pathname]);

  return (
    <section
      className="w-full flex flex-col items-center justify-center"
      data-theme="light"
    >
      <div className="mx-auto my-8 w-10/12 lg:w-3/5 self-center flex flex-col lg:flex-row items-center   justify-center gap-4">
        <div className="w-full object-contain">
          <img
            src={illustration}
            className="aspect-auto w-full"
            alt={`${illustration} vector`}
          />
        </div>
        <div className="w-full flex-col items-center justify-center gap-4">
          <Title>{title}</Title>
          <div className="w-full my-10 shadow-xl rounded-lg overflow-hidden">
            <ul className="w-full flex">
              <li className="w-full h-10 flex items-center justify-center">
                <Link
                  to="/auth"
                  style={{ backgroundColor: 'white' }}
                  className={`${
                    activeLink === 'signin'
                      ? 'flex items-center justify-center w-full py-4 px-8 text-red-500 bg-white'
                      : 'flex items-center justify-center w-full py-4 px-8 text-red-500 bg-gray-100'
                  }`}
                >
                  Sign in
                </Link>
              </li>
              <li className="w-full h-10 flex items-center justify-center">
                <Link
                  to="/auth/signup"
                  style={
                    activeLink === 'signup' && { backgroundColor: 'white' }
                  }
                  className={`${
                    activeLink === 'signup'
                      ? 'flex items-center justify-center w-full py-4 px-8 text-red-500 bg-white'
                      : 'flex items-center justify-center w-full py-4 px-8 text-red-500 bg-gray-100'
                  }`}
                >
                  Sign up
                </Link>
              </li>
            </ul>
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WithScrollIntoView(Authentication);
