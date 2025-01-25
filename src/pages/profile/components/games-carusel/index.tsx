import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useDeleteGame } from "@/react-query/mutation/profile-game-carusel";
import { useGamesInfoByUserId } from "@/react-query/query/profile";
import { userAtom } from "@/store/jotai";
import i18next from "i18next";
import { useAtom } from "jotai";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import GameEdit from "../edit-game";
import { DEFAULT_LAYOUT_PATH } from "@/Routes/default/index.enum";

const ProfileGameCarusel: React.FC = () => {
  const { t } = useTranslation();
  const lang = i18next.language;
  const currentLang = lang ?? "en";
  const [user] = useAtom(userAtom);
  const userId = user?.user?.id;
  //
  const imageUrl = import.meta.env.VITE_SUPABASE_GAME_IMAGES_STORAGE_URL;
  //
  const { data: gamesInfo, refetch , isLoading } = useGamesInfoByUserId(userId);
  //
  const { mutate: deleteGame } = useDeleteGame();
  //
  const handleGameDelete = (id: number) => {
    //:D :D
    if (!confirm("Are you sure you want to delete this game?")) {
      return;
    }
    if (!confirm("Pleas don't")) {
      return;
    }
    if (!confirm("ნუწამიშლი :დ. რთულია ახლიდან დამატება")) {
      return;
    }

    deleteGame(id, {
      onSuccess: () => {
        refetch();
      },
    });
  };
  //
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (

    <Carousel className="w-full h-full max-w-md mx-auto ">    
      <CarouselContent className="h-full -ml-1 flex items-center ">       
        {         gamesInfo?.length === 0?(
          <div className=" w-[95%] mx-auto h-[200px] flex justify-center items-center">
            <h1>{t("profile.no-games")}</h1>
          </div>
        ):gamesInfo?.map((data) => (
          <CarouselItem
            key={data.id}
            className="pl-1 md:basis-1/2 lg:basis-1/3 group relative h-full "
          >
            
            <Card className="relative h-full flex flex-col">
              {/* transparent box with Delete,enter,edit, Buttons */}
              <div className="absolute  flex-col  inset-0 bg-black/50 flex items-center justify-center  gap-4   opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                <Button variant="green" className="w-[75%]">
                  <Link
                    to={`/${currentLang}/${DEFAULT_LAYOUT_PATH.GAME_PAGE}/${data.id}`}
                  >
                    {t("profile.enter")}
                  </Link>
                </Button>
                <GameEdit gameInfo={data} refetch={refetch} />
                <Button
                  onClick={() => handleGameDelete(data.id)}
                  variant="red"
                  className="w-[75%]"
                >
                  {t("profile.delete")}
                </Button>
              </div>

              <CardContent className=" p-0 border-[1px] dark:border-[#f75b1d71] border-[#6ec1e4] bg-creemy shadow-lg dark:bg-black flex flex-col h-full">
                {/* image section */}
                <div className="aspect-square dark:bg-black p-1 overflow-hidden flex items-center justify-center">
                  <img
                    src={imageUrl + data.image_url}
                    alt="Game"
                    className="w-full h-full object-cover flex items-center justify-center"
                  />
                </div>

                {/* game name section */}

                {currentLang == "en" ? (
                  <div className="bg-gray-100 dark:bg-black text-center py-2 min-h-[48px] flex items-center justify-center">
                    <span
                      className="text-sm font-medium truncate w-full px-2"
                      title={data.name_en ?? "No name available"}
                    >
                      {data.name_en ?? "No Name"}
                    </span>
                  </div>
                ) : (
                  <div className="bg-gray-100 dark:bg-black text-center py-2 min-h-[48px] flex items-center justify-center">
                    <span
                      className="text-sm font-medium truncate w-full px-2"
                      title={data.name_ka ?? "No name available"}
                    >
                      {data.name_ka ?? "No Name"}
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ProfileGameCarusel;
