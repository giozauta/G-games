import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import i18next from "i18next";
import { Github, Linkedin, Twitter } from "lucide-react";
import { AUTH_LAYOUT_PATHS } from "@/Routes/auth/index.enum";
import { DEFAULT_LAYOUT_PATH } from "@/Routes/default/index.enum";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const lang = i18next.language;
  const currentLang = lang ?? "en";
  const location = useLocation().pathname;
  const isHome = location.slice(4)===DEFAULT_LAYOUT_PATH.HOME;//დინამიურად რომ შევცვალოთ bg-სტილი როცა home გვერძზე ვართ


  return (
    <div
      className={` flex flex-col bg-[#fcfbf5]   h-auto sm:h-[594px] dark:${isHome? "bg-custom-gradient" : "bg-custom-gradient2"}`}
    >
      <div className=" sm:border-t  dark:border-white/10 sm:flex-row flex-col h-auto  sm:h-[494px] mx-auto flex w-full ">
        <div className=" w-full sm:w-[45%]  flex flex-col justify-center items-center   py-4 sm:py-0 bg-blue-300">
          <div className=" h-full w-full sm:w-1/2 flex flex-col  pl-4 ">
            <div className=" h-1/2  flex justify-start items-end ">
              <img src="/images/footerLogo.png" alt="logo" />
            </div>
            <div className=" dark:text-white h-1/3 py-4 sm:py-0 flex items-center text-5xl font-bold font-chakra-petch">
              {t("footer.games")}
            </div>
            <div className=" h-1/2 py-4 sm:py-0 font-chakra-petch  flex items-start gap-2">
              <a
                href="https://github.com/giozauta"
                target="_blank"
                rel="noopener noreferrer"
                className=" p-2 rounded-sm hover:bg-orange2 transition-all duration-300 ease-in"
              >
                <Github />
              </a>
              <a
                href="https://www.linkedin.com/in/giorgi-zautashvili-9779a7215/"
                target="_blank"
                rel="noopener noreferrer"
                className=" p-2 rounded-sm hover:bg-orange2 transition-all duration-300 ease-in"
              >
                <Linkedin />
              </a>

              <a
                href="https://x.com/zautashvil5392"
                target="_blank"
                rel="noopener noreferrer"
                className=" p-2 rounded-sm hover:bg-orange2 transition-all duration-300 ease-in"
              >
                <Twitter />
              </a>
            </div>
          </div>
        </div>
        <div className=" border-t sm:border-t-0  sm:border-l py-4 sm:py-0  dark:border-white/10 w-full sm:w-[25%] flex  justify-start ">
          <div className="border flex flex-col pl-4 w-full  ">
            <div className="border dark:text-[#F75A1D]  flex justify-start pt-0 sm:pt-[84px] items-end  font-bold text-3xl font-chakra-petch">
              {t("footer.explore")}
            </div>
            <Link
              to={`/${currentLang}/${AUTH_LAYOUT_PATHS.PROFILE}`}
              className="text-black pt-2 border sm:pt-10 dark:text-white dark:hover:text-blue2 hover:text-blue2 transition-all duration-300 ease-in "
            >
              {t("footer.user-profile")}
            </Link>
          </div>
        </div>
        <div className="bg-blue-300 border-t sm:border-t-0  sm:border-l py-4 sm:py-0 dark:border-white/10 w-full sm:w-[40%] flex justify-evenly items-center ">
          <div className="pl-4 h-full border w-full sm:w-1/2 flex flex-col">
            <div className="border dark:text-[#F75A1D] pb-0  sm:pb-10 h-1/3 flex items-end text-3xl font-bold font-chakra-petch transition-all duration-300 ease-in  ">
              {t("footer.follow")}
            </div>
            <div className="pt-2 border sm:pt-0 h-1/2 flex flex-col text-black dark:text-white">
              <a
                href="https://github.com/giozauta"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue2 transition-all duration-300 ease-in "
              >
                <div className="pb-2 footerLinksHover">
                  {t("footer.github")}
                </div>
              </a>
              <div className="pb-2">
                {" "}
                <a
                  href="https://www.linkedin.com/in/giorgi-zautashvili-9779a7215"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue2 transition-all duration-300 ease-in"
                >
                  {t("footer.linkedIn")}
                </a>
              </div>
              <div className="pb-2 ">
                {" "}
                <a
                  href="https://x.com/zautashvil5392"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue2 transition-all duration-300 ease-in"
                >
                  {t("footer.twitter")}{" "}
                </a>
              </div>
            </div>
          </div>
          <div className=" h-full w-1/2 relative hidden lg:flex ">
            <img
              src="/images/footer_image.webp"
              className="  h-[650px]  absolute bottom-0 left-0"
              alt="footerImage"
            />
          </div>
        </div>
      </div>
      <div className=" border-t  dark:text-white dark:border-white/10 flex justify-center items-center h-[100px]">
        {t("footer.copyright")}
      </div>
    </div>
  );
};

export default Footer;
