import React from "react";
import EditProfile from "./components/edit-profile";
import ProfileGameCarusel from "./components/games-carusel";
import UserInfo from "./components/user-info";

const Profile: React.FC = () => {
  return (
    <div>
      <div className="relative w-full h-[300px] sm:h-[400px] bg-bar bg-cover bg-center ">
        <div className="absolute inset-0 bg-black opacity-50 z-10 "></div>

        <div className=" relative z-20 flex  sm:flex-row justify-between items-end w-[90%] sm:w-[70%] mx-auto h-full">
          <div className=" text-white font-bold text-left text-3xl sm:text-4xl font-chakra-petch mb-4">
            Giorgi Zautashvili
            <div className=" mt-4 ">
              <EditProfile />
            </div>
          </div>

          <div className=" flex justify-center items-end">
            <img
              src="/images/call-little.png"
              alt="man"
              className="w-32 sm:w-48 h-auto"
            />
          </div>
        </div>
      </div>

      <div className="dark:bg-custom-gradient  py-12   sm:mx-auto ">
        <div className=" items-center flex flex-col lg:flex-row justify-between h-auto lg:h-[400px] w-[90%] lg:w-[70%] mx-auto gap-8">
          <div className="flex-1 p-6 h-[250px] w-full bg-white dark:bg-gray-800/50 shadow-lg rounded-lg ">
            <UserInfo />
          </div>

          <div className="flex-1 p-7 h-[250px]   w-full bg-white dark:bg-gray-800/50 shadow-lg rounded-lg ">
            <ProfileGameCarusel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
