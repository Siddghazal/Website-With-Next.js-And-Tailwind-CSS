"use client"
import { AiOutlineShopping } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { RiMenu2Line } from "react-icons/ri";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle mobile menu

  return (
    <>
      {/* Navbar Container */}
      <div className="bg-white md:bg-green-700">
        {/* Desktop Navbar */}
        <div className="container justify-between items-center py-3 hidden md:flex">
          {/* Logo and Search */}
          <div className="flex gap-8 items-center">
            <h2 className="text-white font-bold text-[35px]">Logo</h2>
            <div className="relative">
              <input
                className="px-4 py-3 rounded-sm w-[300px]"
                type="text"
                placeholder="Search..."
              />
            </div>
          </div>

          {/* Icons */}
          <div className="text-white flex gap-6 text-[26px]">
            <CiUser />
            <div className="relative">
              <AiOutlineShopping />
              <div className="bg-red-600 w-[20px] h-[20px] grid place-items-center text-[12px] rounded-full absolute right-[-10px] top-[15px]">
                0
              </div>
            </div>
            <RiMenu2Line />
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="container flex justify-between items-center text-[26px] py-4 md:hidden">
          <RiMenu2Line
            onClick={() => setMenuOpen(!menuOpen)} // Toggle menu visibility
            className="cursor-pointer"
          />
          <div className="font-bold text-green-700">Logo</div>
          <div className="relative">
            <AiOutlineShopping />
            <div className="bg-red-600 w-[20px] h-[20px] text-white grid place-items-center text-[12px] rounded-full absolute right-[-10px] top-[15px]">
              0
            </div>
          </div>
        </div>

        {/* Dropdown Menu for Mobile */}
        {menuOpen && (
          <div className="bg-primary md:hidden">
            <ul className="flex flex-col gap-4 uppercase py-4 text-white text-center">
              <a href="#" className="hover:underline">
                Home
              </a>
              <a href="#" className="hover:underline">
                Shop
              </a>
              <a href="#" className="hover:underline">
                Blog
              </a>
              <a href="#" className="hover:underline">
                Pages
              </a>
              <a href="#" className="hover:underline">
                About
              </a>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </ul>
          </div>
        )}
      </div>

      {/* Desktop Menu */}
      <div className="bg-primary hidden md:block">
        <ul className="container flex gap-8 uppercase py-4 text-white">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            Shop
          </a>
          <a href="#" className="hover:underline">
            Blog
          </a>
          <a href="#" className="hover:underline">
            Pages
          </a>
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
