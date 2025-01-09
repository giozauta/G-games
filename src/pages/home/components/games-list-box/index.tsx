import React from "react";
import GameCard from "./components/game-card";

const GamesListBox: React.FC = () => {
  const array = [1, 2, 3, 4, 5, 6];

  return (
    <div className="border-[1px] border-[#f75b1d71]  flex flex-col p-2 sm:p-10 md:p-20  rounded-3xl gap-10 mt-20 sm:mt-40 md:mt-60 lg:mt-80 w-[82%] mx-auto h-[700px] sm:h-[800px] md:h-[900px] ">
      <div className=" text-6xl font-chakra-petch flex items-center justify-center sm:justify-start">
        All Games
      </div>
      <div className=" gap-10 flex flex-wrap justify-center  mt-10  overflow-y-scroll h-[500px]">
        {array.map((index) => {
          return <GameCard key={index} />;
        })}
      </div>
    </div>
  );
};

export default GamesListBox;
