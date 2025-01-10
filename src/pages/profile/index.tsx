import React from "react";

const Profile: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col  top-0 left-0 w-full h-[400px] absolute bg-bar bg-cover bg-center">
      </div>
      <div className="flex flex-col absolute top-0 left-0 w-full h-[400px] bg-black opacity-50"></div>

      <div className=" flex flex-col h-[800px] w-[90%] sm:w-[70%] mx-auto  relative">

        <div className="flex  justify-between h-[40%] sm:h-[39%] text-4xl items-end  font-bold font-chakra-petch  ">
          <div className="pb-24 text-white">Giorgi Zautashvili</div>
          <div className=" h-full flex justify-center items-end">
            <img src="/public/images/call-little.png" alt="" />
          </div>
        </div>
        <div className="flex h-[60%] sm:h-[61%]border">rame</div>

      </div>
    </div>
  );
};

export default Profile;
