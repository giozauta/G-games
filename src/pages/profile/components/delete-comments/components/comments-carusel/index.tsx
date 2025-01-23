import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const CommentsCarusel: React.FC = () => {
  const { t } = useTranslation();
  const comments = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];//დროებით
  const games = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];//დროებით

  const [commentBoxDisplayStatus, setCommentBoxDisplayStatus] = useState<
    boolean[]
  >(Array(games.length).fill(false));

  const handleCommentBoxDisplay = (index: number) => {
    setCommentBoxDisplayStatus((prev) =>
      prev.map((status, i) => (i === index ? !status : status)),
    );
  };

  return (
    <Carousel className="w-[90%] mx-auto">
      <CarouselContent className="-ml-0 -mr-0 pr-1 h-full">
        {games.map((_, index) => (
          <CarouselItem
            key={index}
            className=" md:basis-1/2 lg:basis-1/3 xl:basis-1/4 h-full "
          >
            <div className="p-1 h-full">
              <Card className="h-full border-none">
                <div className="h-[500px] 2xl:h-[550px] mb-2 w-full flex items-center justify-center transition-all duration-200 ease-in border border-white/20 rounded-md hover:border-blue2 dark:hover:border-orange2">
                  {commentBoxDisplayStatus[index] ? (
                    <ScrollArea className="w-full h-full flex hover:overflow-y-auto">
                      {comments.map((_, index) => (
                        <div
                          key={index}
                          className="p-2 m-2 border  border-white/20 rounded-md flex flex-col  items-center justify-between gap-4"
                        >
                          <span className="flex-1  text-sm text-gray-800 dark:text-gray-200">
                          Comment Comment t{index + 1}
                          </span>
                          <div className="flex gap-2 w-full justify-end">
                            <Button
                              variant="outline"
                              className="text-red-600 w-full"
                              onClick={() =>
                                console.log(`Deleting comment ${index + 1}`)
                              }
                            >
                              {t("profile.delete")}
                            </Button>
                          </div>
                        </div>
                      ))}
                    </ScrollArea>
                  ) : (
                    <img
                      src="/images/test.jpg"
                      alt="call"
                      className="h-full w-full object-cover rounded-md"
                    />
                  )}
                </div>
              </Card>
              <div>
                <Button
                  onClick={() => handleCommentBoxDisplay(index)}
                  className="w-full"
                  variant="outline"
                >
                  {commentBoxDisplayStatus[index]
                    ? t("profile.close-comments-box")
                    :t("profile.open-comments-box")}
                </Button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CommentsCarusel;
