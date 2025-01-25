import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { CurrentLangType, GameType } from "../../types";
import {
  calculateMouseStyle,
  resetMouseStyle,
} from "@/pages/home/utalities/mouseHandlers";
import { DEFAULT_LAYOUT_PATH } from "@/Routes/default/index.enum";

const TopThreeBox: React.FC<{
  currentLanguage: CurrentLangType;
  games: GameType[];
}> = ({ currentLanguage, games }) => {
  const [style, setStyle] = useState({}); //რომ შევცვალოთ ყუთზე ჰოვერი
  const { t } = useTranslation();
  const imgUrl = import.meta.env.VITE_SUPABASE_GAME_IMAGES_STORAGE_URL;
  //ვიყენებ მემოს რომ არ მოხდეს გამეორებით დასორთვა, თუ ცვლილება არარის
  const sortedGames = useMemo(
    () =>
      games
        ?.slice()
        .sort((a, b) => (b.likes ?? 0) - (a.likes ?? 0))
        .slice(0, 3),
    [games],
  );
  //მაუსის ჰოვერის ფუნქციონალი ტოპ 3 ყუთზე
  const handleMouseMove = (e: React.MouseEvent) => {
    const box = e.currentTarget.getBoundingClientRect();
    setStyle(calculateMouseStyle(e, box));
  };

  const handleMouseLeave = () => {
    setStyle(resetMouseStyle());
  };
  //

  return (
    <div className=" h-[450px]  relative  lg:top-[-30px] w-full sm:w-[50%]   md:w-[35%] flex justify-center  sm:justify-start text-white ">
      <div
        style={style}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="z-20  w-[95%] sm:w-96   flex flex-col  justify-start items-center   bg-white/5 border border-white/20 rounded-3xl p-6  "
      >
        <div className="text-3xl font-bold   gap-5  w-full h-1/6  flex justify-start items-center  ">
          <div className="bg-[#F75A1D] w-4 h-4 rounded-lg  "></div>
          {t("hero.top-games")}
        </div>

        <div className="w-full h-[80%] flex flex-col justify-evenly gap-4  ">
          {sortedGames?.map((game) => (
            <Link
              to={`/${currentLanguage}/${DEFAULT_LAYOUT_PATH.GAME_PAGE}/${game.id}`}
              key={game.id}
              className="flex justify-start hover:scale-105 transition-all duration-300 ease-in   items-center gap-5 h-1/3 text-xl font-bold overflow-hidden hover:border-orange2    border-b border-white/20 "
            >
              {/* ავატარი  */}
              <Avatar className="w-16 h-16  shadow-lg ">
                <AvatarImage src={imgUrl + game.image_url} alt="avatar" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              {/* თამაშის სახელები  */}
              <div className="flex flex-col gap-1">
                <div className="text-lg font-semibold">
                  {currentLanguage === "en" ? game.name_en : game.name_ka}
                </div>
                {/* ლაიქები */}
                <div className="text-sm text-green2">
                  {t("hero.likes")}: {game.likes}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopThreeBox;
