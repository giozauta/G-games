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

const LangSwitch: React.FC = () => {
  const { t } = useTranslation();

  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className=" bg-transparent dark:bg-transparent border-none hover:bg-transparent hover:dark:bg-transparent hover:text-[#64d100] dark:hover:text-[#64d100] focus:outline-none focus:ring-0 shadow-none"
        asChild
      >
        <Button className="bg-transparent dark:bg-transparent hover:bg-transparent hover:dark:bg-transparent hover:text-[#64d100] dark:hover:text-[#64d100] shadow-none">
          <Globe className="w-4 h-4 text-black dark:text-white" />
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
