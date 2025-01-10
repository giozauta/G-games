import React from "react";
import EditProfile from "./components/edit-profile";

const Profile: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col relative sm:absolute top-0 left-0 w-full h-[400px] bg-bar bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

        <div className="h-[400px] flex justify-between w-[90%] sm:w-[70%] mx-auto items-end top-0 left-0 relative z-20">
          <div className="h-44 flex flex-col justify-evenly text-white font-bold text-4xl font-chakra-petch ">
            Giorgi Zautashvili
            <EditProfile />
          </div>

          <div className="h-full flex justify-center items-end">
            <img src="/images/call-little.png" alt="man" />
          </div>
        </div>
      </div>
      <div className="dark:bg-custom-gradient">
        <div className=" flex flex-col h-80 sm:h-[750px]  w-[90%] sm:w-[70%] mx-auto sm:pt-28  relative ">
          <div className=" justify-between h-[40%] sm:h-[39%] text-4xl items-end  font-bold font-chakra-petch hidden sm:flex"></div>
          <div className="flex flex-col pt-20 h-[60%] sm:h-[61%] text-black dark:text-white">
            <div>Email : 6XKxg@example.com</div>
            <div>Phone Number : 597 55 55 55 </div>
            <div>Location : Tbilisi , Georgia </div>
            <div>Gender : Male </div>
            <div>Age : 20 </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
