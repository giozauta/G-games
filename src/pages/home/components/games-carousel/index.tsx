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

const GameCarousel: React.FC<{ games: GameType[] | undefined }> = ({
  games,
}) => {
  const lang = useAtom(Lang)[0];
  const imgUrl = import.meta.env.VITE_SUPABASE_GAME_IMAGES_STORAGE_URL;
  //

  //
  const { t } = useTranslation();
  //
  const sortedGames = games
    ?.slice()
    .sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
    )
    .slice(0, 10);
  //
  return (
    <Carousel className="w-[70%]  mx-auto mt-20  sm:mt-[670px] z-40 ">
      <div className="w-full  flex justify-center items-center mt-4 text-4xl font-semibold text-white/80 font-chakra-petch">
        {t("hero.new-games")}
      </div>

      <CarouselContent className="-ml-0 -mr-0 py-5 pr-1">
        {sortedGames?.map((_, index) => (
          <CarouselItem
            key={index}
            className=" pl-1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 "
          >
            <div className="p-1 ">
              <Card className="rounded-3xl hover:scale-105 transition-all duration-200 ease-in ">
                <CardContent className="rounded-3xl shadow-sm p-5 flex flex-col aspect-square items-center justify-center  border border-white hover:border-blue2 dark:border-black dark:hover:border-orange2 transition-all duration-500 ease-in">
                  <div className=" h-4/5 w-full flex items-center justify-center ">
                    <img
                      src={imgUrl + sortedGames[index].image_url}
                      alt="call"
                      className="rounded-xl h-full w-full object-cover"
                    />
                  </div>
                  <div className=" h-1/5 w-full flex items-center justify-center text-xl font-bold">
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
