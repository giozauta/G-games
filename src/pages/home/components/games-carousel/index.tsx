import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Lang } from "@/store/jotai";
import { useAtom } from "jotai";
import { useTranslation } from "react-i18next";
import { GameType } from "./types";
import { Link } from "react-router-dom";
import { DEFAULT_LAYOUT_PATH } from "@/Routes/default/index.enum";
import { useMemo } from "react";

const GameCarousel: React.FC<{ games: GameType[] | undefined }> = ({
  games,
}) => {
  const lang = useAtom(Lang)[0];
  const imgUrl = import.meta.env.VITE_SUPABASE_GAME_IMAGES_STORAGE_URL;
  const gamePath = "/" + lang + "/" + DEFAULT_LAYOUT_PATH.GAME_PAGE + "/";
  //
  const { t } = useTranslation();
  //
  const sortedGames = useMemo(() => {
    return games
      ?.slice()
      .sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
      )
      .slice(0, 10);
  }, [games]);
  //
  return (
    <Carousel className="w-[70%]  mx-auto mt-20  sm:mt-[670px] z-40  ">
      <div className="w-full  flex justify-center items-center mt-4 text-4xl font-semibold text-white/80 font-chakra-petch">
        {t("hero.new-games")}
      </div>

      <CarouselContent className="-ml-0 -mr-0 py-5 pr-1 ">
        {sortedGames?.map((_, index) => (
          <CarouselItem
            key={index}
            className=" pl-1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 "
          >
            <div className="p-1 ">
              <Card className="rounded-2xl hover:scale-105 transition-all duration-200 ease-in  hover:border-blue2 border dark:hover:border-orange2 bg-lightBlue">
                <CardContent className="rounded-2xl shadow-sm p-5 flex flex-col aspect-square items-center justify-center  ">
                  <Link
                    to={`${gamePath}${sortedGames[index].id}`}
                    className=" h-4/5 w-full flex items-center justify-center "
                  >
                    <img
                      src={imgUrl + sortedGames[index].image_url}
                      alt="call"
                      className="rounded-2xl h-full w-full object-cover "
                    />
                  </Link>
                  <div className="h-1/5 w-full text-md sm:text-xl md:text-xl flex items-center justify-center  font-bold overflow-hidden text-ellipsis whitespace-nowrap">
                    {lang === "en"
                      ? sortedGames[index].name_en
                      : sortedGames[index].name_ka}
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default GameCarousel;
