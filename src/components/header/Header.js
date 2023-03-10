import React from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { navOpened } from '../../redux/navigation/navigation';

const Header = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(navOpened());
  };

  return (
    <header className="lg:font-semibold">
      <section className="w-full h-14 px-8 lg:px-40 relative overflow-hidden flex text-3xl lg:text-base justify-between items-center">
        <button type="button" onClick={handleClick} className="lg:hidden">
          <FaBars />
        </button>
        <NavLink
          to=""
          className="lg:flex hidden justify-center py-5 border-x-[0.5px] px-3 items-center"
        >
          User Profile
        </NavLink>
        <h2 className="uppercase tracking-tighter bg-red-500 text-4xl font-bold h-full flex flex-col justify-center items-center px-[6px]">
          <NavLink to="/">Velmar</NavLink>
        </h2>
        <NavLink to="/search" className="lg:border-x-[0.5px] lg:p-5">
          <FaSearch />
        </NavLink>
      </section>
      <nav className="w-screen hidden lg:flex justify-center border-t-[0.5px] border-current">
        <ul className="w-2/5 flex justify-between items-center">
          <li>
            <NavLink to="/" className="flex justify-between items-center">
              Comics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/characters"
              className="flex justify-between items-center"
            >
              Characters
            </NavLink>
          </li>
          <li>
            <NavLink to="/stories" className="flex justify-between items-center">
              Stories
            </NavLink>
          </li>
          <li>
            <NavLink to="/series" className="flex justify-between items-center">
              Series
            </NavLink>
          </li>
          <li>
            <NavLink to="/creators" className="flex justify-between items-center">
              Creators
            </NavLink>
          </li>
          <li>
            <NavLink>More</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
