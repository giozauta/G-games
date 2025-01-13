import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const handleActiveNav = ({ isActive }: { isActive: boolean }) => {
    return isActive
      ? " hover:text-[#64d100]  transition-colors duration-300 ease-in py-2 text-[#64d100] dark:text-[#64d100] "
      : " hover:text-[#64d100]  transition-colors duration-300 ease-in py-2 ";
  };
  const { t } = useTranslation();

  return (
    <div className=" py-10 sm:p-0 flex flex-col justify-center items-start sm:items-center sm:flex-row sm:gap-7 ">
      <NavLink to="home" className={handleActiveNav}>
        {t("navbar.home")}
      </NavLink>
      <NavLink to="profile" className={handleActiveNav}>
        {t("navbar.profile")}
      </NavLink>
      <NavLink to="addGame" className={handleActiveNav}>
        {t("navbar.eddGame")}
      </NavLink>
    </div>
  );
};

export default Navbar;
