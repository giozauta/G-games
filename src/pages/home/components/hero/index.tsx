import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Hero: React.FC = () => {
  return (
    <div className=" flex flex-col sm:flex-row justify-between w-full h-[900px] overflow-hidden relative sm:absolute top-0 left-0 bg-gradient-to-r from-[#1d0b03] to-[#0b1900]">
      <div className="absolute top-0 left-0 w-full h-full z-0 hidden md:flex justify-center items-center">
        <img src="/public/images/bg-1.png" alt="bg" />
      </div>

      <div className=" relative gap-0 sm:gap-10 md:gap-0  z-10 flex flex-col sm:flex-row justify-evenly sm:justify-center items-center w-full h-full ">
        <div className="  h-96 w-full sm:w-[35%] flex justify-start sm:justify-end ">
          <div className="text-7xl sm:text-6xl lg:text-7xl xl:text-8xl  pl-4 sm:pl-0 font-chakra-petch text-white font-bold ">
            <div>Ultimate</div>
            <div className="text-[#F75A1D]">Gamers's</div>
            <div>Haven</div>

            <button className="text-lg rounded-3xl  w-[120px] h-[50px]  border-r-2 border-l-2 border-[#F75A1D]  ">
              <span className="bg-[#F75A1D] rounded-3xl px-5 py-2">
                Sign Up
              </span>
            </button>
          </div>
        </div>
        <div className="h-full w-[30%] hidden md:flex justify-center items-end ">
          <img
            src="/public/images/call.webp"
            alt="call"
            className=" w-[520px] h-[650px]"
          />
        </div>
        <div className=" h-96 w-full  sm:w-[35%] flex justify-center sm:justify-start ">
          <div className=" bg-red w-96   flex flex-col  justify-start items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 ">
            <div className="text-3xl font-bold flex items-center gap-4  w-full h-1/4 ">
              <div className="bg-[#F75A1D] w-4 h-4 rounded-lg "></div>Top 3
              Games
            </div>
            <div className=" w-full h-3/4 flex flex-col justify-evenly ">
              <div className="flex justify-start items-center gap-10  h-1/3 text-xl font-bold">
                <Avatar className="w-16 h-16 ">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                dasaxeleba
              </div>
              <div className="flex justify-start items-center gap-10 h-1/3 text-xl font-bold">
                <Avatar className="w-16 h-16">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                dasaxeleba
              </div>
              <div className="flex justify-start items-center gap-10 h-1/3 text-xl font-bold">
                <Avatar className="w-16 h-16 ">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                dasaxeleba
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
