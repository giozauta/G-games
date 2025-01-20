import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { useAtom } from "jotai";
import { Lang } from "@/store/jotai";
import { useGamesById } from "@/react-query/query/profile";
import { useParams } from "react-router-dom";
import CommentSection from "./components/comments";

const GamePage: React.FC = () => {
  const gameId = useParams()?.id;
  const lang = useAtom(Lang)[0];
  const imgUrl = import.meta.env.VITE_SUPABASE_GAME_IMAGES_STORAGE_URL;
  //
  const { data: gameInfo, isLoading, isError } = useGamesById(Number(gameId));
  //
  if (isLoading) {
    return (
      <div className="dark:bg-custom-gradient sm:h-[800px] flex justify-center items-center   w-[99%] sm:w-full mx-auto ">
        Loading...
      </div>
    );
  }
  if (isError) {
    return <div>something went wrong...</div>;
  }
  if (!gameInfo) {
    return <div>Loading game information...</div>;
  }

  return (
    <div className=" dark:bg-custom-gradient gap-4  h-auto pb-20  py-0 sm:py-20 flex flex-col lg:flex-row justify-center  items-center   w-full mx-auto  ">
      <Card className="w-full md:w-[90%] lg:w-[700px] lg:px-10 min-h-[600px] p-6 ml-2 sm:border  border-none bg-[#fcfbf5] rounded-none sm:rounded-xl sm:shadow-lg  dark:bg-custom-gradient2  ">
        <CardContent className=" gap-5 p-0 flex justify-start flex-col sm:flex-row ">
          <div className=" flex justify-center items-center   sm:w-[270px] sm:h-[355px]  ">
            <img
              src={imgUrl + gameInfo?.image_url}
              alt="game"
              className="rounded-md w-full h-full"
              loading="lazy"
              onError={(e) =>
                (e.currentTarget.src = "/path/to/placeholder-image.jpg")
              }
            />
          </div>{" "}
          <CardDescription className="p-0    flex sm:flex-col  gap-2 ">
            <div className="p-2 ">Release Date: {gameInfo?.release_date}</div>

            <div className="p-2 ">
              Platform: {gameInfo?.platform?.toUpperCase()}
            </div>
            <div className="p-2 ">Likes:{gameInfo?.likes ?? " 0"}</div>
          </CardDescription>
        </CardContent>

        <CardContent className=" p-0 pt-4 text-3xl text-orange2">
          {lang === "en" ? gameInfo?.name_en : gameInfo?.name_ka}
        </CardContent>
        <CardContent className=" p-0 pt-4 ">
          {lang === "en" ? gameInfo?.description_en : gameInfo?.description_ka}
        </CardContent>
      </Card>

      <CommentSection gameInfo={gameInfo} />
    </div>
  );
};

export default GamePage;
