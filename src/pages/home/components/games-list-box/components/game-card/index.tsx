import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface GameData {
  id: string;
}

const GameCard: React.FC<{ gameData: GameData }> = ({ gameData }) => {
  const { t } = useTranslation();

  if (!gameData) {
    return null;
  }

  return (
    <div className="px-4 bg-white text-black dark:text-white  w-96 h-full flex flex-col rounded-3xl dark:bg-white/5 backdrop-blur-md border dark:border-white/10 dark:hover:border-[#F75A1D] hover:border-[#6ec1e4] transition-all duration-500">
      <div className=" overflow-hidden h-[50%] mt-5  flex justify-center items-center rounded-xl ">
        <img
          src="./public/images/game2.webp"
          alt="game"
          className="transition-all duration-500 transform hover:scale-105 h-full"
        />{" "}
      </div>
      <div className=" h-[10%] flex justify-start items-center text-xl font-chakra-petch font-bold ">
        Apex Legends
      </div>
      <div className=" h-[20%] flex-col gap-2 border-t dark:border-t-white/10 flex justify-center items-start    line-clamp-3 text-lg font-chakra-petch">
        <div>
          <Badge variant="outline" className="">
            Platform
          </Badge>
          <Badge variant="outline" className="">
            likes
          </Badge>
        </div>
        <Badge variant="outline" className="">
          Release date
        </Badge>
      </div>
      <div className=" h-[20%]  flex justify-between items-center border-t dark:border-t-white/10 ">
        <Button variant={"outline"}>{t("listBox.like")}</Button>
        <Link to={`/gamePage/${gameData.id}`}>
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
