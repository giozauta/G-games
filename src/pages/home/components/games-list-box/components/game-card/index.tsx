import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import i18n from "i18next";
import { GameDataType, Refetch } from "./types";
import { Image } from "lucide-react";
import { useLikesUpdate } from "@/react-query/mutation/game-card";
import { useState } from "react";
import { DEFAULT_LAYOUT_PATH } from "@/Routes/default/index.enum";
import {
  calculateMouseStyle,
  resetMouseStyle,
} from "../../../../utalities/mouseHandlers";

const GameCard: React.FC<{ gameData: GameDataType; refetch: Refetch }> = ({
  gameData,
  refetch,
}) => {
  const [isAnimating, setIsAnimating] = useState(false); //ლაიქიცს ანიმაციისთვის
  //
  const [likes, setLikes] = useState(gameData.likes ?? 0); //ლაიქები რომ გამოგვიჩნდეს სანამ მონაცემები მოგვივა ბაზიდან
  //
  const [style, setStyle] = useState({}); //რომ შევცვალოთ ყუთზე ჰოვერი
  //
  const { t } = useTranslation();
  const lang = i18n.language ?? "en";
  //
  const gameNameEn = gameData?.name_en;
  const gameNameKa = gameData?.name_ka;
  const Platform = gameData?.platform;
  const releaseDate = gameData?.release_date;
  const imgUrl =
    import.meta.env.VITE_SUPABASE_GAME_IMAGES_STORAGE_URL + gameData.image_url;
  //
  const { mutate: updateGameLikes } = useLikesUpdate();

  // Handle like action
  const handleLikeClick = () => {
    setLikes(likes + 1); //სანამ მონაცემები ბაზიდან დაგვიბრუნდება ლაიქი რომ გამოგვიჩინოს
    //ლაიქის ანიმაციისთვის
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 500);
    }
    updateGameLikes(gameData.id, {
      onSuccess: () => {
        refetch();
      },
    });
  };

  //3d ეფექტისთვის
  const handleMouseMove = (e: React.MouseEvent) => {
    const box = e.currentTarget.getBoundingClientRect();
    setStyle(calculateMouseStyle(e, box));
  };

  const handleMouseLeave = () => {
    setStyle(resetMouseStyle());
  };
  //

  if (!gameData) {
    return null;
  }

  return (
    <div
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="  px-4 bg-creemy text-black dark:text-white  flex flex-col rounded-xl dark:bg-white/5 backdrop-blur-md border dark:border-white/10 dark:hover:border-orange2 hover:border-blue2 transition-all duration-500 h-[420px] w-[310px] "
    >
      <div className="rounded-xl overflow-hidden h-[50%] mt-5 flex justify-center items-center ">
        {imgUrl ? (
          <img
            src={imgUrl}
            alt="game"
            className="transition-all duration-500 transform hover:scale-105 h-full w-full object-cover rounded-xl"
          />
        ) : (
          <div className="border dark:border-white/10 rounded-2xl h-full w-full flex justify-center items-center">
            <Image
              size={100}
              className="hover:scale-105 text-blue2 dark:text-orange2 transition-all duration-300 ease-in"
            />
          </div>
        )}
      </div>
      <div className="h-[10%] flex justify-start items-center text-xl font-chakra-petch font-bold">
        {lang === "en" ? gameNameEn?.toUpperCase() : gameNameKa}
      </div>
      <div className="h-[20%] flex-col gap-2 border-t dark:border-t-white/10 flex justify-center items-start line-clamp-3 text-lg font-chakra-petch">
        <div className="flex gap-2 items-center py-1">
          <Badge variant="outline">{Platform}</Badge>
          <Badge variant="outline">
            {t("listBox.like")} {likes}
          </Badge>
        </div>
        <Badge variant="outline">
          {releaseDate ? releaseDate.toString() : ""}
        </Badge>
      </div>
      <div className=" h-[20%] flex justify-between items-center border-t dark:border-t-white/10">
        <Button
          variant="outline"
          onClick={handleLikeClick}
          className={` transition-all duration-300 ease-in bg-transparent ${
            isAnimating
              ? "animate-like-animation"
              : "hover:bg-blue2 dark:hover:bg-green2 hover:text-white2 hover:dark:text-black"
          }`}
        >
          {t("listBox.like")}
        </Button>

        <Link to={`/${lang}/${DEFAULT_LAYOUT_PATH.GAME_PAGE}/${gameData.id}`}>
          <Button
            variant="outline"
            className="rounded-[50%] p-3  w-10 h-10 dark:bg-[#60D600] bg-[#6ec1e4] flex items-center justify-center hover:rotate-[-45deg] hover:bg-[#60D600] dark:hover:bg-[#F75A1D] transition-all duration-500"
          >
            <img src="/images/right-up.png" alt="arrow" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default GameCard;
