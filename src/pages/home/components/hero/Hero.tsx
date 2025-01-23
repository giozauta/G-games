import React from "react";

import { useTranslation } from "react-i18next";

import { GameType } from "./types";

import StarAwardImagesBox from "./components/for-style/star-img";
import BoxesBg from "./components/for-style/boxes-bg";
import YellowLine from "./components/for-style/yellow-Line";
import LeftSideHeaderText from "./components/left-side-header-text";
import TopThreeBox from "./components/right-side-topThree-box";
import CenterPicture from "./components/center-picture";

const Hero: React.FC<{ games: GameType[] | undefined }> = ({ games }) => {
  //
  const { i18n } = useTranslation();
  const currentLanguage =
    (i18n.language as "en" | "ka" | null | undefined) ?? "en"; //იმისთვის რომ შევძლოთ ტექსტის ზომის ცვლა იმის მიხედვით თუ რა ენაზეა
  //
  if (!games) {
    return <div>...error</div>;
  }

  return (
    <div className=" flex flex-col sm:flex-row justify-between w-full h-[900px] overflow-hidden relative sm:absolute top-0 left-0 bg-gradient-to-r from-[#1d0b03] to-[#0b1900] ">
      {/*this is for style only to appear yellow line*/}
      <YellowLine />
      {/*this is for style only to appear star */}
      <StarAwardImagesBox />
      {/*this div is for style only to appear border boxes მხოლოდ სტილისთვის */}
      <BoxesBg />
      <div className="py-10 sm:py-0 dark:border-none relative gap-0 sm:gap-10 md:gap-0   flex flex-col sm:flex-row justify-evenly sm:justify-center  items-center w-full h-full px-0 sm:px-7 bg-blue2/60 dark:bg-transparent ">
        <LeftSideHeaderText currentLanguage={currentLanguage} />
        <CenterPicture />
        <TopThreeBox currentLanguage={currentLanguage} games={games} />
      </div>
    </div>
  );
};

export default Hero;
