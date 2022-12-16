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
          ? 'px-8 py-5 uppercase absolute top-0 left-0 right-0 lg:hidden'
          : 'translate-y-full'
      }`}
    >
      <button type="button" className="text-3xl" onClick={handleClick}>
        <FaTimes />
      </button>
      <nav className="my-8">
        <ul className="leading-10">
          <li>
            <NavLink to="/news" className="flex justify-between items-center">
              <span>News</span>
              <FaChevronRight />
            </NavLink>
          </li>
          <li>
            <NavLink to="/comics" className="flex justify-between items-center">
              <span>Comics</span>
              <FaChevronRight />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="characters"
              className="flex justify-between items-center"
            >
              <span>Characters</span>
              <FaChevronRight />
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className="flex justify-between items-center">
              <span>Movies</span>
              <FaChevronRight />
            </NavLink>
          </li>
          <li>
            <NavLink to="/shows" className="flex justify-between items-center">
              <span>Tv Shows</span>
              <FaChevronRight />
            </NavLink>
          </li>
          <li>
            <NavLink to="/games" className="flex justify-between items-center">
              <span>Games</span>
              <FaChevronRight />
            </NavLink>
          </li>
          <li>
            <NavLink className="flex justify-between items-center">
              <span>Videos</span>
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
        <NavLink to="" className="flex mb-4 justify-between items-center">
          <span>User Profile</span>
          <FaChevronRight />
        </NavLink>
      </section>
      <ul className="flex justify-between items-center mt-3 text-2xl py-5">
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
