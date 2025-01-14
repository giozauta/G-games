import React, { useEffect, useRef } from "react";
import { HeaderButton, HeaderButtonX } from "./components/buttons/buttons";
import Navbar from "./components/navbar/navbar";
import { Link, useParams } from "react-router-dom";
import { ModeToggle } from "./components/mode-toggle";
import LangSwitch from "./components/lang-switch";
import { useTranslation } from "react-i18next";
import { useAtom } from "jotai";
import { userAtom } from "@/store/jotai";
import { useLogOut } from "@/react-query/mutation/log-out";

const Header: React.FC = () => {
  const [buttonState, setButtonState] = React.useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const lang = useParams();
  const currentLang = lang.lang ?? "en";
  const [user] = useAtom(userAtom);

  const { mutate: logOut } = useLogOut();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        headerRef.current?.classList.add("dark:bg-black");
        headerRef.current?.classList.remove("dark:bg-transparent");
      } else {
        headerRef.current?.classList.remove("dark:bg-black");
        headerRef.current?.classList.add("dark:bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleButtonState = () => {
    setButtonState(!buttonState);
  };

  const handleLogout = () => {
    logOut();
  };

  return (
    <div
      ref={headerRef}
      className="header   bg-[#fcfbf5] dark:bg-transparent sm:bg-none px-2 lg:px-32 flex flex-col h-[auto] sm:flex-row sm:h-[90px] sm:items-center justify-between sticky top-0 z-50 mx-auto"
    >
      <div className="logo   w-full sm:w-[43%] h-full flex items-center py-4 sm:p-1 justify-between   ">
        <div className="flex items-center justify-center gap-5 scale-100 sm:scale-75 md:scale-100 ">
          <img src="/images/logo.png" alt="logo" />
          <Link
            to={`/${currentLang}/home`}
            className="font-chakra-petch text-3xl font-bold  flex items-center justify-center"
          >
            {t("navbar.logo")}
          </Link>
        </div>
        <div className=" flex items-center gap-2 pr-4 ">
          <LangSwitch />
          <ModeToggle />
          <button onClick={handleButtonState} className="sm:hidden">
            {buttonState ? <HeaderButton /> : <HeaderButtonX />}
          </button>
        </div>
      </div>

      <div
        className={`${
          buttonState ? "hidden" : "flex"
        }  flex flex-col w-full h-full sm:flex sm:w-[57%]   sm:flex-row sm:items-center sm:justify-between `}
      >
        <Navbar />

        {user && (
          <button
            onClick={handleLogout}
            className="flex pb-5 sm:pb-0 w-20 sm:w-auto  h-full   items-center gap-2 hover:text-[#64d100] transition-colors duration-300 ease-in "
          >
            <img src="/images/user4.png" alt="user" className="w-5 h-5 " />
            <div className="text-base   h-full flex justify-center items-center">
              {t("navbar.logout")}
            </div>
          </button>
        )}

        {!user && (
          <Link
            to="sign-in"
            className="flex pb-5 sm:pb-0 w-20 sm:w-auto  items-center gap-2 hover:text-[#64d100] transition-colors duration-300 ease-in"
          >
            <img src="/images/user4.png" alt="user" className="w-5 h-5" />
            <div className="text-base pt-2 ">{t("navbar.login")}</div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
