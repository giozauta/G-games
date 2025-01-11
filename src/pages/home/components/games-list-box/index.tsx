import React from "react";
import GameCard from "./components/game-card";

const GamesListBox: React.FC = () => {
  const array = [
    { id: "1", name: "gameName" },
    { id: "2", name: "gameName2" },
    { id: "1", name: "gameName" },
    { id: "1", name: "gameName" },
  ];

  return (
    <div className="border-[1px]  dark:border-[#f75b1d71] border-[#6ec1e4] bg-[#fcfbf5] shadow-lg dark:bg-black flex flex-col p-2 sm:p-10 md:p-20  rounded-3xl gap-10 mt-20 sm:mt-40 md:mt-60 lg:mt-80 w-[82%] mx-auto h-[700px] sm:h-[800px] md:h-[900px] ">
      <div className=" flex flex-col gap-4 items-start sm:flex-row sm:items-center  justify-center ">
        <div className=" flex justify-center sm:justify-start w-full text-6xl sm:w-2/3 font-chakra-petch">
          All Games
        </div>
        <input
          type="text"
          className="h-10 w-[70%] mx-auto sm:w-1/3 rounded-lg dark:bg-black border dark:border-[#60D600] border-[#6ec1e4]  pl-5"
          placeholder="Search"
        />
      </div>
      <div className=" gap-10 flex flex-wrap justify-center  sm:mt-10  overflow-y-scroll h-[500px]">
        {array.map((game) => {
          return <GameCard key={game.id} gameData={game} />;
        })}
      </div>
    </div>
  );
};

export default GamesListBox;
