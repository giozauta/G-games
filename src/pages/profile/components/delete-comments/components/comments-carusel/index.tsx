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
import { useDeleteComment } from "@/react-query/mutation/profile";
import { useCommentsByUserId } from "@/react-query/query/profile";
import { userAtom } from "@/store/jotai";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const CommentsCarusel: React.FC = () => {
  const { t } = useTranslation();
  const user_id = useAtom(userAtom)[0]?.user?.id;
  //გვჭირდება რომ კომენტარების ჩვენება ვაკონტროლოთ
  const [commentBoxDisplayStatus, setCommentBoxDisplayStatus] = useState<
    boolean[]
  >([]);

  //
  const {
    data: gamesWithComments,
    isLoading,
    isError,
    refetch,
  } = useCommentsByUserId(user_id);
  //
  const img_url = import.meta.env.VITE_SUPABASE_GAME_IMAGES_STORAGE_URL;
  //გვჭირდება რომ კომენტარების ჩვენების state ვაკონტროლოთ
  useEffect(() => {
    if (gamesWithComments) {
      setCommentBoxDisplayStatus(Array(gamesWithComments.length).fill(false));
    }
  }, [gamesWithComments]);
  //
  const handleCommentBoxDisplay = (index: number) => {
    setCommentBoxDisplayStatus((prev) =>
      prev.map((status, i) => (i === index ? !status : status)),
    );
  };
  //
  const { mutate: deleteComment } = useDeleteComment();

  const handleDeleteComment = (comment_id: number) => {
    deleteComment(comment_id, {
      onSuccess: () => {
        refetch();
      },
    });
  };

  //
  if (isLoading) {
    return <div className="w-[90%] mx-auto">Loading...</div>;
  }
  if (isError) {
    return <div className="w-[90%] mx-auto">Error</div>;
  }

  return (
   <Carousel className="w-full max-w-[90%] mx-auto">
  <CarouselContent className="-ml-0 -mr-0 pr-1 h-full">
    {gamesWithComments?.length === 0 ? (
      <div className="h-full w-full flex justify-center items-center">
        {t("profile.no-comments")}
      </div>
    ) : (
      gamesWithComments?.map((game, index) => (
        <CarouselItem
          key={index}
          className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 h-full"
        >
          <div className="p-1 h-full">
            <Card className="h-full border-none bg-creemy">
              <div className="h-[300px] sm:h-[400px] md:h-[500px] 2xl:h-[550px] mb-2 w-full flex items-center justify-center transition-all duration-200 ease-in border border-white/20 rounded-md hover:border-blue2 dark:hover:border-orange2">
                {commentBoxDisplayStatus[index] ? (
                  <ScrollArea className="w-full h-[200px] sm:h-[300px] flex hover:overflow-y-auto">
                    {game?.comments?.map((comment, index) => (
                      <div
                        key={index}
                        className="p-2 m-2 border border-white/20 rounded-md flex flex-col items-center justify-between gap-4"
                      >
                        <span className="flex-1 text-sm text-gray-800 dark:text-gray-200">
                          {comment.comment}
                        </span>
                        <div className="flex gap-2 w-full justify-end">
                          <Button
                            variant="outline"
                            className="text-red-600 w-full"
                            onClick={() =>
                              handleDeleteComment(comment.comment_id)
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
                    src={img_url + game?.image_url}
                    alt="game"
                    className="h-full w-full object-cover rounded-md"
                  />
                )}
              </div>
            </Card>
            <div>
              <Button
                onClick={() => handleCommentBoxDisplay(index)}
                className="w-full text-xs sm:text-sm py-2 bg-creemy"
                variant="outline"
              >
                {commentBoxDisplayStatus[index]
                  ? t("profile.close-comments-box")
                  : t("profile.open-comments-box")}
              </Button>
            </div>
          </div>
        </CarouselItem>
      ))
    )}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

  );
};

export default CommentsCarusel;
