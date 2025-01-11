import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const handleActiveNav = ({ isActive }: { isActive: boolean }) => {
    return isActive
      ? "pr-4 hover:text-[#64d100] transition-colors duration-300 ease-in py-2 text-[#64d100] dark:text-[#64d100]"
      : "pr-4 hover:text-[#64d100] transition-colors duration-300 ease-in py-2 ";
  };

  return (
    <div className=" py-10 sm:p-0 flex flex-col justify-center items-start sm:items-center sm:flex-row sm:gap-5 ">
      <NavLink to="/home" className={handleActiveNav}>
        Home
      </NavLink>
      <NavLink to="/profile" className={handleActiveNav}>
        Profile
      </NavLink>
      <NavLink to="/addGame" className={handleActiveNav}>
        Add Game
      </NavLink>
    </div>
  );
};

export default Navbar;
