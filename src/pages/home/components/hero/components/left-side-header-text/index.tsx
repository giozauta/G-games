import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";
import { heroMiddleTextSize, heroTextSize } from "../../schema";
import { useTranslation } from "react-i18next";
import { DEFAULT_LAYOUT_PATH } from "@/Routes/default/index.enum";
import { CurrentLangType } from "../../types";
import { useAtom } from "jotai";
import { userAtom } from "@/store/jotai";

const LeftSideHeaderText: React.FC<{ currentLanguage: CurrentLangType }> = ({
  currentLanguage,
}) => {
  const { t } = useTranslation();
  const user = useAtom(userAtom)[0];

  return (
    <div className="  z-20 h-[340px]  sm:h-[400px] lg:h-[500px]  w-[92%] sm:w-[50%]  md:w-[35%] flex  justify-start md:justify-end  ">
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

        {!user && (
          <div className=" text-lg flex justify-center items-center hover:scale-105 transition-all duration-300 ease-in rounded-md  mt-10 px-1 h-[40px]  border-r-2 border-l-2 border-orange2  ">
            <Button
              variant={"outline"}
              className="bg-[#F75A1D]   dark:border-green2 rounded-md px-5 py-2 dark:hover:bg-orange2 flex justify-center items-center transition-all duration-300 ease-in"
            >
              <Link to={`/${currentLanguage}/${DEFAULT_LAYOUT_PATH.SIGN_UP}`}>
                {t("hero.sign-up")}
              </Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeftSideHeaderText;
