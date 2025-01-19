import React, { useMemo, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { heroTextSize, heroMiddleTextSize } from "./schema";
import { Button } from "@/components/ui/button";
import { GameType } from "./types";
import {
  calculateMouseStyle,
  resetMouseStyle,
} from "./utalities/mouseHandlers";
import StarAwardImagesBox from "./components/star-img";

const Hero: React.FC<{ games: GameType[] | undefined }> = ({ games }) => {
  //
  const [style, setStyle] = useState({}); //რომ შევცვალოთ ყუთზე ჰოვერი
  //
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const currentLanguage =
    (i18n.language as "en" | "ka" | null | undefined) ?? "en"; //იმისთვის რომ შევძლოთ ტექსტის ზომის ცვლა იმის მიხედვით თუ რა ენაზეა

  //
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
  if (!sortedGames) {
    return <div>...error</div>;
  }

  return (
    <div className=" pb-20 sm:pb-0 pt-10 sm:pt-0 flex flex-col sm:flex-row justify-between w-full h-[900px] overflow-hidden relative sm:absolute top-0 left-0 bg-gradient-to-r from-[#1d0b03] to-[#0b1900]">
      <div className=" absolute top-0 left-0 w-full h-full z-0 hidden md:flex justify-center items-center">
        <img src="/images/bg-1.png" alt="bg" />
      </div>
      {/*this is for style only to appear star */}
      <StarAwardImagesBox />
      {/*this div is for style only to appear border boxes მხოლოდ სტილისთვის */}
      <div className="  w-full z-20  h-full grid grid-cols-[repeat(15,1fr)] grid-rows-[repeat(10,1fr)] gap-0 top-0  absolute ">
        {[...Array(180)].map((_, i) => (
          <div
            key={i}
            className=" bg-black bg-transparent flex justify-center items-center border  border-white/5  "
          ></div>
        ))}
      </div>

      <div className=" relative gap-0 sm:gap-10 md:gap-0   flex flex-col sm:flex-row justify-evenly sm:justify-center  items-center w-full h-full px-0 sm:px-7 ">
        <div className="  z-20  h-[450px]  w-[92%] sm:w-[50%]  md:w-[35%] flex  justify-start md:justify-end  ">
          <div className=" flex flex-col  gap-2 items-start   sm:pl-0 font-chakra-petch text-white font-bold w-full sm:w-full md:w-full lg:w-full xl:w-auto ">
            <div className={heroTextSize({ lang: currentLanguage })}>
              {t("hero.ultimate")}
            </div>
            <div className={heroMiddleTextSize({ lang: currentLanguage })}>
              {t("hero.gamers")}
            </div>
            <div className={heroTextSize({ lang: currentLanguage })}>
              {t("hero.haven")}
            </div>

            <div className=" text-lg flex justify-center items-center hover:scale-105 transition-all duration-300 ease-in rounded-md  mt-10 px-1 h-[40px]  border-r-2 border-l-2 border-orange2  ">
              <Button
                variant={"outline"}
                className="bg-[#F75A1D]   dark:border-green2 rounded-md px-5 py-2 dark:hover:bg-orange2 flex justify-center items-center transition-all duration-300 ease-in"
              >
                <Link to={`/${currentLanguage}/sign-up`}>
                  {t("hero.sign-up")}
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="z-10   h-full w-[30%] hidden md:flex justify-end items-end relative top-[-30px] ">
          <img
            src="/images/call.webp"
            alt="call"
            className=" w-[500px] h-[650px]  "
          />
        </div>
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
                <div
                  key={game.id}
                  className="flex justify-start    items-center gap-5 h-1/3 text-xl font-bold overflow-hidden hover:border-orange2 transition-all duration-300 ease-in    border-b border-white/20 "
                >
                  {/* ავატარი  */}
                  <Avatar className="w-16 h-16  shadow-lg ">
                    <AvatarImage src={imgUrl + game.image_url} />
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
