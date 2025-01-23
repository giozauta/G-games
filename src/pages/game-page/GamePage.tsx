import { useGamesById } from "@/react-query/query/profile";
import { useParams } from "react-router-dom";
import CommentSection from "./components/comments-section";
import GameSection from "./components/game-section";

const GamePage: React.FC = () => {
  const gameId = useParams()?.id;
  //
  const { data: gameInfo, isLoading, isError } = useGamesById(Number(gameId));
  //
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }
  if (isError) {
    return (
      <div className="flex justify-center items-center h-screen ">
        something went wrong...
      </div>
    );
  }
  if (!gameInfo) {
    return (
      <div className="flex justify-center items-center h-screen ">
        Loading game information...
      </div>
    );
  }

  return (
    <div className=" w-full   dark:bg-custom-gradient gap-4  pb-20  py-0 sm:py-20 flex flex-col lg:flex-row justify-center  items-center   mx-auto  ">
      <GameSection gameInfo={gameInfo} />
      <CommentSection gameInfo={gameInfo} />
    </div>
  );
};

export default GamePage;
