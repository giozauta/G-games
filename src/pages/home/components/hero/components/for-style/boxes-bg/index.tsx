import React from "react";

const BoxesBg: React.FC = () => {
  return (
    <div className="  w-full z-20  h-full grid grid-cols-[repeat(15,1fr)] grid-rows-[repeat(10,1fr)] gap-0 top-0  absolute ">
      {[...Array(180)].map((_, i) => (
        <div
          key={i}
          className=" bg-black bg-transparent flex justify-center items-center   border-white/5 border border-b-0 "
        ></div>
      ))}
    </div>
  );
};

export default BoxesBg;
