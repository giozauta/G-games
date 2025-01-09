import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const GameCarousel: React.FC = () => {
  return (
    <Carousel className="w-[70%] mx-auto  z-40">
      <CarouselContent className="-ml-1 ">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            key={index}
            className=" pl-1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
          >
            <div className="p-1">
              <Card className="rounded-3xl">
                <CardContent className=" flex flex-col aspect-square items-center justify-center p-5">
                  <div className=" h-4/5 w-full flex items-center justify-center ">
                    <img
                      src="/public/images/ghostGame.webp"
                      alt="call"
                      className="rounded-xl h-full w-full object-cover"
                    />
                  </div>
                  <div className=" h-1/5 w-full flex items-center justify-center text-xl font-bold">
                    Ghost of Tsushima
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
