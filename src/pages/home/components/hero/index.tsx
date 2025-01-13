import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { heroTextSize, heroMiddleTextSize } from "./schema";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const currentLanguage =
    (i18n.language as "en" | "ka" | null | undefined) ?? "en"; //იმისთვის რომ შევძლოთ ტექსტის ზომის ცვლა იმის მიხედვით თუ რა ენაზეა

  return (
    <div className=" flex flex-col sm:flex-row justify-between w-full h-[900px] overflow-hidden relative sm:absolute top-0 left-0 bg-gradient-to-r from-[#1d0b03] to-[#0b1900]">
      <div className="absolute top-0 left-0 w-full h-full z-0 hidden md:flex justify-center items-center">
        <img src="/images/bg-1.png" alt="bg" />
      </div>

      <div className=" relative gap-0 sm:gap-10 md:gap-0  z-10 flex flex-col sm:flex-row justify-evenly sm:justify-center items-center w-full h-full ">
        <div className="  h-96 w-full sm:w-[35%] flex justify-start sm:justify-end ">
          <div className=" flex flex-col  gap-2 items-start pl-4 sm:pl-0 font-chakra-petch text-white font-bold ">
            <div className={heroTextSize({ lang: currentLanguage })}>
              {t("hero.ultimate")}
            </div>
            <div className={heroMiddleTextSize({ lang: currentLanguage })}>
              {t("hero.gamers")}
            </div>
            <div className={heroTextSize({ lang: currentLanguage })}>
              {t("hero.haven")}
            </div>

            <button className="text-lg hover:scale-105 transition-all duration-300 ease-in rounded-md  mt-10 px-1 h-[50px]  border-r-2 border-l-2 border-[#F75A1D]  ">
              <Button
                variant={"outline"}
                className="bg-[#F75A1D]  dark:border-green2 rounded-md px-5 py-2 dark:hover:bg-orange2 flex justify-center items-center transition-all duration-300 ease-in"
              >
                <Link to="/sign-up">{t("hero.sign-up")}</Link>
              </Button>
            </button>
          </div>
        </div>
        <div className="h-full w-[30%] hidden md:flex justify-center items-end ">
          <img
            src="/images/call.webp"
            alt="call"
            className=" w-[520px] h-[650px]"
          />
        </div>
        <div className=" h-96 w-full  sm:w-[35%] flex justify-center sm:justify-start text-white">
          <div className=" bg-red w-96   flex flex-col  justify-start items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 ">
            <div className="text-3xl font-bold flex items-center gap-4  w-full h-1/4 ">
              <div className="bg-[#F75A1D] w-4 h-4 rounded-lg "></div>
              {t("hero.top-games")}
            </div>
            <div className=" w-full h-3/4 flex flex-col justify-evenly ">
              <div className="flex justify-start items-center gap-10  h-1/3 text-xl font-bold">
                <Avatar className="w-16 h-16 ">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                dasaxeleba
              </div>
              <div className="flex justify-start items-center gap-10 h-1/3 text-xl font-bold">
                <Avatar className="w-16 h-16">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                dasaxeleba
              </div>
              <div className="flex justify-start items-center gap-10 h-1/3 text-xl font-bold">
                <Avatar className="w-16 h-16 ">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                dasaxeleba
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
