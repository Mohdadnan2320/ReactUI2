import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menu, setMenu] = useState("false");

  const handleMenuChange = () => {
    setMenu(!menu);
  };

  return (
    <div className="w-full px-3 py-4 z-10 relative">
      <div className="flex items-center justify-between md:hidden">
        <h3 className="text-lg font-semibold text-[#F5F5F5]">Ofx</h3>
        <CiMenuBurger className="px-1 size-7 rounded-full text-[#ffffff] md:hidden" onClick={handleMenuChange} />
      </div>
      <nav className='w-full ' >
        <ul
          className={`${
            menu ? "block" : "inline-block right-[0]"
          } w-full h-screen transition-all duration-200 ease-out absolute
           top-0 -right-[100%] z-50 bg-[#F5F5F5] px-3 py-2 text-center 
           md:right-[0] md:bg-transparent md:text-[#F5F5F5] md:flex md:h-auto md:static md:items-center md:justify-between`}
        >
          <div className="flex items-center justify-end mb-12 md:hidden">
            <IoClose className="text-lg mt-2" onClick={handleMenuChange} />
          </div>
          <li className="text-lg font-medium mt-5 md:mt-0">
            <a href="/">Home</a>
          </li>
          <li className="text-lg font-medium mt-5 md:mt-0">
            <a href="/">Spaces</a>
          </li>
          <li className="text-lg font-medium mt-5 md:mt-0">
            <a href="/">Locations</a>
          </li>
          <li className="text-lg font-medium mt-5 md:mt-0">
            <a href="/">Contacts</a>
          </li>
        </ul>
      </nav>
      </div>
  );
};

export default Navbar;
Navbar;
