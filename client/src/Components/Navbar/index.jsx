import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import { RiSearch2Line } from "react-icons/ri";

const MobileNav = () => {
  return (
    <div className="flex w-full items-center justify-between lg:hidden">
      <div className="w-32">
        <img
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt="logo"
          className="w-full h-full"
        />
      </div>
      <div className="flex items-center gap-3">
        <button className="bg-zomato-400 text-white px-3 py-2 rounded-full">
          Use App
        </button>
        <span className="border p-2 border-gray-400 text-zomato-400 rounded-full">
          <FaUserAlt />
        </span>
      </div>
    </div>
  );
};

const LargeNav = () => {
  return (
    <div className="container px-20 mx-auto">
      <div className="hidden lg:flex w-full items-center justify-between gap-4">
        <div className="w-32">
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt="logo"
            className="w-full h-full"
          />
        </div>
        <div className="w-3/4 bg-white shadow-md p-3 flex items-center gap-4 border border-gray-200 rounded">
          <div className="flex items-center gap-3 border-r-2 border-gray-300 pr-2">
            <span className="text-zomato-400">
              <MdLocationPin />
            </span>
            <input
              type="text"
              placeholder="Manipal, Udupi"
              className="focus:outline-none"
            />
            <RiArrowDownSFill />
          </div>
          <div className="flex items-center gap-3 w-full">
            <RiSearch2Line />
            <input
              type="search"
              placeholder="Search for restaurant, cuisine or a dish"
              className="focus:outline-none w-full"
            />
          </div>
        </div>
        <div className="ml-28 flex gap-4">
          <button className="text-gray-400 text-xl hover:text-gray-800">
            Login
          </button>
          <button className="text-gray-400 text-xl hover:text-gray-800">
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <>
      <nav className="p-4 flex bg-white shadow-md w-full items-center">
        <MobileNav />
        <LargeNav />
      </nav>
    </>
  );
};

export default Navbar;
