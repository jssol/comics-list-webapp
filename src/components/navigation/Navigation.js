import React from 'react';
import {
  FaChevronRight, FaFacebook, FaInstagram,
  FaPinterest, FaSnapchat, FaTimes, FaTumblr, FaTwitter, FaYoutube,
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { navClosed } from '../../redux/navigation/navigation';

const Navigation = () => {
  const dispatch = useDispatch();
  const navState = useSelector((state) => state.navigation);
  const { open } = navState;

  const handleClick = () => {
    dispatch(navClosed());
  };

  return (
    <section
      data-theme="retro"
      className={`${
        open
          ? 'h-screen z-10 px-8 py-5 uppercase fixed top-0 left-0 right-0 bottom- 0 lg:hidden'
          : 'translate-x-[-100%] absolute top-0 left-0 right-0'
      }`}
    >
      <button type="button" className="text-3xl" onClick={handleClick}>
        <FaTimes />
      </button>
      <nav className="my-8">
        <ul className="leading-10">
          <li>
            <NavLink
              to="/"
              onClick={handleClick}
              className="flex justify-between items-center"
            >
              <span>Comics</span>
              <FaChevronRight />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              onClick={handleClick}
              className="flex justify-between items-center"
            >
              <span>Events</span>
              <FaChevronRight />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/characters"
              onClick={handleClick}
              className="flex justify-between items-center"
            >
              <span>Characters</span>
              <FaChevronRight />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/stories"
              onClick={handleClick}
              className="flex justify-between items-center"
            >
              <span>Stories</span>
              <FaChevronRight />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/series"
              onClick={handleClick}
              className="flex justify-between items-center"
            >
              <span>Series</span>
              <FaChevronRight />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/creators"
              onClick={handleClick}
              className="flex justify-between items-center"
            >
              <span>Creators</span>
              <FaChevronRight />
            </NavLink>
          </li>
          <li className="hidden lg:block">
            <NavLink>More</NavLink>
          </li>
          <li>
            <NavLink>Lifestyle</NavLink>
          </li>
          <li>
            <NavLink>Role-playing Game</NavLink>
          </li>
          <li>
            <NavLink>Books</NavLink>
          </li>
          <li>
            <NavLink>Podcast</NavLink>
          </li>
          <li>
            <NavLink>Shop</NavLink>
          </li>
        </ul>
      </nav>
      <section className="border-y border-current">
        <h4 className="font-bold my-4">Marvel Insider</h4>
        <NavLink to="" className="flex mb-5 justify-between items-center">
          <span>User Profile</span>
          <FaChevronRight />
        </NavLink>
      </section>
      <ul className="flex justify-between items-center mt-5 text-2xl py-5">
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaTwitter />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaTumblr />
        </li>
        <li>
          <FaYoutube />
        </li>
        <li>
          <FaSnapchat />
        </li>
        <li>
          <FaPinterest />
        </li>
      </ul>
    </section>
  );
};

export default Navigation;
