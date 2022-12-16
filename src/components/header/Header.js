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
    <header className="w-full h-14 px-6 flex text-3xl justify-between items-center">
      <button type="button" onClick={handleClick}>
        <FaBars />
      </button>
      <h2 className="uppercase tracking-tighter bg-red-500 text-4xl font-bold h-full flex flex-col justify-center items-center px-[6px]">
        <NavLink to="/">Velmar</NavLink>
      </h2>
      <button type="button">
        <FaSearch />
      </button>
    </header>
  );
};

export default Header;
