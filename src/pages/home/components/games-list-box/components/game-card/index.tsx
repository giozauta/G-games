import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import i18n from "i18next";
import { GameDataType } from "./types";
import { Image } from "lucide-react";

const GameCard: React.FC<{ gameData: GameDataType }> = ({ gameData }) => {
  const { t } = useTranslation();
  const lang = i18n.language ?? "en";

  const gameNameEn = gameData.name_en;
  const gameNameKa = gameData.name_ka;
  const likes = gameData.likes;
  const Platform = gameData.platform;
  const releaseDate = gameData.release_date;
  const imgUrl =
    import.meta.env.VITE_SUPABASE_GAME_IMAGES_STORAGE_URL + gameData.image_url;

  if (!gameData) {
    return null;
  }

  return (
    <div className="px-4 bg-white text-black dark:text-white  w-96 h-full flex flex-col rounded-3xl dark:bg-white/5 backdrop-blur-md border dark:border-white/10 dark:hover:border-[#F75A1D] hover:border-[#6ec1e4] transition-all duration-500">
      <div className=" overflow-hidden h-[50%] mt-5  flex justify-center items-center rounded-xl  ">
        {imgUrl ? (
          <img
            src={imgUrl}
            alt="game"
            className="transition-all duration-500 transform hover:scale-105  h-full w-full object-cover rounded-3xl"
          />
        ) : (
          <div className="border dark:border-white/10 rounded-2xl h-full w-full flex justify-center items-center">
            {" "}
            <Image
              size={100}
              className="hover:scale-105 text-blue2 dark:text-orange2 transition-all duration-300 ease-in"
            />{" "}
          </div>
        )}
      </div>
      <div className=" h-[10%] flex justify-start items-center text-xl font-chakra-petch font-bold ">
        {lang === "en" ? gameNameEn?.toUpperCase() : gameNameKa}
      </div>
      <div className=" h-[20%] flex-col gap-2 border-t dark:border-t-white/10 flex justify-center items-start    line-clamp-3 text-lg font-chakra-petch">
        <div className=" flex gap-2 items-center  py-1">
          <Badge variant="outline" className="">
            {Platform}
          </Badge>
          <Badge variant="outline" className="">
            {t("listBox.like")} {likes}
          </Badge>
        </div>
        <Badge variant="outline" className="">
          {releaseDate ? releaseDate.toString() : ""}
        </Badge>
      </div>
      <div className=" h-[20%]  flex justify-between items-center border-t dark:border-t-white/10 ">
        <Button variant={"outline"}>{t("listBox.like")}</Button>
        <Link to={`/${lang}/gamePage/${gameData.id}`}>
          <Button
            variant="outline"
            className="rounded-[50%] w-12 h-12 dark:bg-[#60D600] bg-[#6ec1e4] flex items-center justify-center hover:rotate-[-45deg]  hover:bg-[#60D600] dark:hover:bg-[#F75A1D] transition-all duration-500"
          >
            <img src="/images/right-up.png" alt="arrow" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default GameCard;
