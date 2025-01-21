import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { useAtom } from "jotai";
import { Lang } from "@/store/jotai";
import { useGamesById } from "@/react-query/query/profile";
import { useParams } from "react-router-dom";
import CommentSection from "./components/comments";
import { useTranslation } from "react-i18next";

const GamePage: React.FC = () => {
  const gameId = useParams()?.id;
  const lang = useAtom(Lang)[0];
  const imgUrl = import.meta.env.VITE_SUPABASE_GAME_IMAGES_STORAGE_URL;
  //
  const { t } = useTranslation();
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
    return (
      <div className="dark:bg-custom-gradient sm:h-[800px] flex justify-center items-center   w-[99%] sm:w-full mx-auto ">
        something went wrong...
      </div>
    );
  }
  if (!gameInfo) {
    return (
      <div className="dark:bg-custom-gradient sm:h-[800px] flex justify-center items-center   w-[99%] sm:w-full mx-auto ">
        Loading game information...
      </div>
    );
  }

  return (
    <div className=" w-full  dark:bg-custom-gradient gap-4  pb-20  py-0 sm:py-20 flex flex-col lg:flex-row justify-center  items-center   mx-auto  ">
      <Card className="w-full md:w-[90%] lg:w-[800px] gap-6 justify-between   sm:gap-0 p-5  lg:p-10 min-h-[600px]  sm:border border-none bg-[#fcfbf5] rounded-none sm:rounded-xl sm:shadow-lg dark:bg-custom-gradient lg:dark:bg-custom-gradient flex flex-col shadow-none ">
        <CardContent className="  p-0 flex justify-start flex-col sm:flex-row ">
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
          <CardDescription className="p-4 pl-0 sm:pl-4    flex sm:flex-col  gap-5 sm:gap-2 ">
            <div>
              {t("gamePage.releas")}: {gameInfo?.release_date}
            </div>

            <div>
              {t("gamePage.platform")}: {gameInfo?.platform?.toUpperCase()}
            </div>
            <div>
              {t("gamePage.likes")}:{gameInfo?.likes ?? " 0"}
            </div>
          </CardDescription>
        </CardContent>

        <CardContent className="  p-0  text-3xl text-orange2 ">
          {lang === "en" ? gameInfo?.name_en : gameInfo?.name_ka}
        </CardContent>
        <CardContent className=" p-0  overflow-y-auto hide-scrollbar lg:hover:visible-scrollbar h-[200px] md:h-[100px] ">
          {lang === "en" ? gameInfo?.description_en : gameInfo?.description_ka}
        </CardContent>
      </Card>

      <CommentSection gameInfo={gameInfo} />
    </div>
  );
};

export default GamePage;
