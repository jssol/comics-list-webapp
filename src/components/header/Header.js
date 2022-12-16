import React from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';

const Header = () => (
  <header className="w-full h-14 px-6 flex text-2xl justify-between items-center">
    <FaBars />
    <h2 className="uppercase bg-red-500 text-4xl font-bold h-full flex flex-col justify-center items-center px-[6px]">
      Velmar
    </h2>
    <FaSearch />
  </header>
);

export default Header;
