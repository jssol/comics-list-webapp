import React from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import Link from '../shared/Link';
import navLinks from '../../utils/navLinks';
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
        <Link
          to="/profile"
          className="lg:flex hidden justify-center py-5 border-x-[0.5px] px-3 items-center"
        >
          User Profile
        </Link>
        <h2 className="uppercase tracking-tighter bg-red-500 hover:bg-white text-4xl font-bold h-full flex flex-col justify-center items-center px-[6px]">
          <Link to="/" className="w-full h-full flex items-center justify-center">Velmar</Link>
        </h2>
        <Link to="/search" className="lg:border-x-[0.5px] lg:p-5">
          <FaSearch />
        </Link>
      </section>
      <nav className="w-screen hidden lg:flex justify-center border-t-[0.5px] border-current py-2">
        <ul className="w-2/5 flex justify-between items-center">
          {navLinks.map((link) => (
            <li key={link.text}>
              <Link
                to={link.to}
                className="flex justify-between items-center"
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
