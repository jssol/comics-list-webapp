import React from 'react';
import { FaChevronRight, FaTimes } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import Link from '../shared/Link';
import navLinks from '../../utils/navLinks';
import socialLinks from '../../utils/socialLinks';
import { navClosed } from '../../redux/navigation/navigation';

const Navigation = () => {
  const dispatch = useDispatch();
  const navState = useSelector((state) => state.navigation);
  const userState = useSelector((state) => state.user);

  const { isOpen } = navState;
  const { loggedIn, user: { first_name: fName } } = userState;

  const handleClick = () => {
    dispatch(navClosed());
  };

  return (
    <section
      data-theme="light"
      className={`${
        isOpen
          ? 'h-screen flex flex-col z-10 px-8 py-5 uppercase fixed top-0 left-0 right-0 bottom- 0 lg:hidden'
          : 'translate-x-[-100%] absolute top-0 left-0 right-0'
      }`}
    >
      <button type="button" className="text-3xl" onClick={handleClick}>
        <FaTimes />
      </button>
      <nav className="my-8">
        <ul className="leading-10">
          {navLinks.map((link) => (
            <li key={link.text}>
              <Link
                to={link.to}
                onClick={handleClick}
                className="hover:text-[#ef4444] flex justify-between items-center"
              >
                <span>{link.text}</span>
                <FaChevronRight />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <section className="border-y border-current">
        <h4 className="font-bold my-4">Velmar Insider</h4>
        {loggedIn ? (
          <div className="flex mb-5 justify-between items-center">
            <span>{fName}</span>
            <FaChevronRight />
          </div>
        ) : (
          <Link
            to="/auth"
            onClick={handleClick}
            className="flex mb-5 justify-between items-center"
          >
            <span>Login</span>
            <FaChevronRight />
          </Link>
        )}
      </section>
      <ul className="flex self-center gap-4 items-center mt-20 text-2xl py-5">
        {socialLinks.map((link) => (
          <li key={link.to}>
            <a
              href={link.to}
              onClick={handleClick}
              className="hover:text-[#ef4444]"
            >
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Navigation;
