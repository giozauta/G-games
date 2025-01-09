import React from "react";
import { HeaderButton, HeaderButtonX } from "./components/buttons";
import Navbar from "./components/navbar";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [buttonState, setButtonState] = React.useState(false);

  const handleButtonState = () => {
    setButtonState(!buttonState);
  };

  return (
    <div className="header flex flex-col h-[auto] sm:flex-row sm:h-[90px] sm:items-center justify-between sticky top-0 z-50 w-11/12 sm:w-10/12 mx-auto">
      <div className="logo w-full sm:w-[40%] h-full flex items-center py-4 sm:p-1 justify-between ">
        <img src="/public/images/logo.png" alt="logo" />
        <button onClick={handleButtonState} className="sm:hidden">
          {buttonState ? <HeaderButton /> : <HeaderButtonX />}
        </button>
      </div>

      <div
        className={`${
          buttonState ? "hidden" : "flex"
        }  flex flex-col w-full h-full sm:flex sm:w-[60%]  sm:flex-row sm:items-center sm:justify-between `}
      >
        <Navbar />
        <Link to="/login" className="flex   w-20 sm:w-auto  items-center gap-2 text-black hover:text-[#64d100] transition-colors duration-300 ease-in">
          <img src="/images/user4.png" alt="user" className="w-5 h-5" />
          <div className="text-base pt-2 ">Log in</div>
        </Link>

      </div>
    </div>
  );
};

export default Header;
