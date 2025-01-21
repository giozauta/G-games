import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import { useAtom } from "jotai";
import { Lang } from "@/store/jotai";
import { AUTH_LAYOUT_PATHS } from "@/Routes/auth/index.enum";

const LangSwitch: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [, setLang] = useAtom(Lang);
//
  const profileRoute = AUTH_LAYOUT_PATHS.PROFILE; 
  const textSyleWithLocation = location.pathname.includes(profileRoute);//რომ განვსაზღვროთ რომ პროფილის გვერდზე ვართ ჰედერის ტექსტის ფერის სტილისთვის

//
  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    setLang(language); // update language in atom store
    const currentPath = location.pathname.split("/").slice(2).join("/");
    navigate(`/${language}/${currentPath}`);
  };
//
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className=" bg-transparent dark:bg-transparent border-none p-0 hover:bg-transparent hover:dark:bg-transparent hover:text-[#64d100] dark:hover:text-[#64d100] focus:outline-none focus:ring-0 shadow-none "
        asChild
      >
        <Button className="bg-transparent dark:bg-transparent hover:bg-transparent hover:dark:bg-transparent hover:text-[#64d100] dark:hover:text-[#64d100] shadow-none">
          <Globe className={`h-4 w-4  text-black dark:text-white ${textSyleWithLocation && "text-white"}`} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem onClick={() => handleChangeLanguage("en")}>
          {t("switch.lang-en")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleChangeLanguage("ka")}>
          {t("switch.lang-ka")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LangSwitch;
