import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProfileGameCarusel = () => {
  const names = ["rame", "ramerjd", "fdsf sdfsdsdfsdfsdfsdfsdf", ""]; 

  return (
    <Carousel className="w-full h-full max-w-md mx-auto">
      <CarouselContent className="h-full -ml-1 flex items-center">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="pl-1 md:basis-1/2 lg:basis-1/3 group relative h-full"
          >
            <Card className="relative h-full flex flex-col">
              {/* transparent box with Delete Button */}
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
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
                    title={names[index] || "No name available"} 
                  >
                    {names[index] || "No Name"}
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
