import { AUTH_LAYOUT_PATHS } from "@/Routes/auth/index.enum";
import { DEFAULT_LAYOUT_PATH } from "@/Routes/default/index.enum";
import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const handleActiveNav = ({ isActive }: { isActive: boolean }) => {
    return isActive
      ? " hover:text-[#64d100]  transition-colors duration-300 ease-in py-2 text-[#64d100] dark:text-[#64d100] flex h-full items-center justify-center"
      : " hover:text-[#64d100]  transition-colors duration-300 ease-in py-2   flex h-full items-center justify-center";
  };
  const { t } = useTranslation();

  return (
    <div className=" py-10 sm:p-0 flex flex-col justify-center items-start sm:items-center sm:flex-row sm:gap-7  h-full">
      <NavLink to={DEFAULT_LAYOUT_PATH.HOME} className={handleActiveNav}>
        {t("navbar.home")}
      </NavLink>
      <NavLink to={AUTH_LAYOUT_PATHS.PROFILE} className={handleActiveNav}>
        {t("navbar.profile")}
      </NavLink>
      <NavLink to={AUTH_LAYOUT_PATHS.ADD_GAME} className={handleActiveNav}>
        {t("navbar.eddGame")}
      </NavLink>
    </div>
  );
};

export default Navbar;
