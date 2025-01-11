import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";

const ProfileGameCarusel = () => {
  const data = [
    {
      id: 1,
      gameName: "apex Legend",
    },
    {
      id: 2,
      gameName: "apex Legend",
    },
    {
      id: 3,
      gameName: "apex Legend",
    },
  ];

  return (
    <Carousel className="w-full h-full max-w-md mx-auto">
      <CarouselContent className="h-full -ml-1 flex items-center">
        {data.map((data, index) => (
          <CarouselItem
            key={index}
            className="pl-1 md:basis-1/2 lg:basis-1/3 group relative h-full"
          >
            <Card className="relative h-full flex flex-col">
              {/* transparent box with Delete Button */}
              <div className="absolute flex-col  inset-0 bg-black/50 flex items-center justify-center sm:justify-start gap-4 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link
                  to={`/gamePage/${data.id}`}
                  className="flex justify-center items-center px-4 w-[80%] sm:w-[60%] py-2 bg-green2 text-white rounded-md hover:bg-green2/80"
                >
                  Enter
                </Link>
                <button className="px-4 w-[80%] sm:w-[60%] py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                  Delete
                </button>
              </div>

              <CardContent className="p-0 border-[1px] dark:border-[#f75b1d71] border-[#6ec1e4] bg-[#fcfbf5] shadow-lg dark:bg-black flex flex-col h-full">
                {/* image section */}
                <div className="aspect-square dark:bg-black p-1 overflow-hidden flex items-center justify-center">
                  <img
                    src="/public/images/ghostGame.webp"
                    alt="Game"
                    className="w-full h-full object-cover flex items-center justify-center"
                  />
                </div>

                {/* game name section */}
                <div className="bg-gray-100 dark:bg-black text-center py-2 min-h-[48px] flex items-center justify-center">
                  <span
                    className="text-sm font-medium truncate w-full px-2"
                    title={data.gameName || "No name available"}
                  >
                    {data.gameName || "No Name"}
                  </span>
                </div>
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
