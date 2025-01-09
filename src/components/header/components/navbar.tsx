import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className=" py-10 sm:p-0 flex flex-col justify-center items-start sm:items-center sm:flex-row sm:gap-5 ">
      <Link
        to="/home"
        className=" pr-4 hover:text-[#64d100] transition-colors duration-300 ease-in py-2 "
      >
        Home
      </Link>
      <Link
        to="/profile"
        className=" pr-4 hover:text-[#64d100] transition-colors duration-300 ease-in py-2"
      >
        Profile
      </Link>
      <Link
        to="/addGame"
        className=" pr-4 hover:text-[#64d100] transition-colors duration-300 ease-in py-2"
      >
        Add Game
      </Link>
    </div>
  );
};

export default Navbar;
