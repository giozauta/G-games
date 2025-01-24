import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GameInfoType } from "../../types";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { useTranslation } from "react-i18next";
import { useGetCommentsByGameId } from "@/react-query/query/game-page";
import { useAtom } from "jotai";
import { userAtom } from "@/store/jotai";
import { Controller, useForm } from "react-hook-form";
import { useEddGameComment } from "@/react-query/mutation/game-page";

const CommentSection: React.FC<{ gameInfo: GameInfoType }> = ({ gameInfo }) => {
  const { t } = useTranslation();
  //
  const [user] = useAtom(userAtom);
  const isUserLogin = !!user;
  const userImail = user?.user?.email;
  const userId = user?.user?.id;
  //
  const game_name_en = gameInfo?.name_en;
  const game_name_ka = gameInfo?.name_ka;
  const image_url = gameInfo?.image_url;
  //
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      comment: "",
    },
  });
  //
  const {
    data: comments,
    isLoading,
    isError,
    refetch,
  } = useGetCommentsByGameId(gameInfo.id);
  //
  const { mutate: addComment } = useEddGameComment();
  //
  const handleCommentAdd = (formValue: { comment: string }) => {
    if (!isUserLogin || !userImail || !userId) {
      alert("Please login to add comment");
      return false;
    }
    if (!game_name_en || !game_name_ka || !image_url) {
      alert("Game information is incomplete, unable to add comment");
      return;
    }
    if (!formValue.comment) {
      alert("Please add comment");
      return;
    }
    //სიტყვა რომ ძალიანგრძელი არ ჩავწეროთ რამაც არ გამოიწვიოს ui ში ცუდად გამოჩენა
    const words = formValue.comment.split(/\s+/);
    const longWord = words.find((word) => word.length > 35);
    if (longWord) {
      alert(
        `The word "${longWord}" is too long. Words cannot exceed 35 characters.`,
      );
      return;
    }
    addComment(
      {
        id: gameInfo.id,
        comment: formValue.comment,
        user_email: userImail,
        user_id: userId,
        game_name_en: game_name_en,
        game_name_ka: game_name_ka,
        image_url: image_url,
      },
      {
        onSuccess: () => {
          refetch();
        },
      },
    );
    reset();
  };
  //
  const onKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(handleCommentAdd)();
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen ">
        Loading...
      </div>
    );
  }
  if (isError) {
    return (
      <div className="flex justify-center items-center h-screen">
        something went wrong...
      </div>
    );
  }

  return (
    <Card className="w-full   md:w-[90%]  lg:w-[400px] lg:px-10 min-h-[600px] p-6 mr- sm:border border-none bg-creemy rounded-none sm:rounded-xl sm:shadow-lg  flex flex-col shadow-none dark:bg-custom-gradient2 lg:dark:bg-custom-gradient ">
      <div className="flex flex-col flex-grow  w-full  ">
        <CardHeader className=" dark:text-orange2 text-blue2 h-16 p-0 flex justify-center items-start ">
          <CardTitle className="text-xl">
            {t("gamePage.game-comments-head")}
          </CardTitle>
          <CardDescription>{t("gamePage.description")}</CardDescription>
        </CardHeader>

        <ScrollArea className="overflow-y-scroll flex-grow h-60 mt-4 border dark:bg-black/20 dark:border-white/10 p-5  rounded-md hide-scrollbar sm:hover:visible-scrollbar">
          {comments?.length === 0 ? (
            <div className="w-full h-full flex justify-center items-center">
              {t("gamePage.no-comments")}
            </div>
          ) : (
            comments?.map((comment) => {
              return (
                <div
                  key={comment.id}
                  className="border p-2 rounded-sm dark:border-white/10 mb-2 h-auto"
                >
                  <p>{comment.user_email ?? "Anonymous"}</p>
                  <p className="text-sm ">{comment.comment}</p>
                </div>
              );
            })
          )}
        </ScrollArea>
        {isUserLogin && (
          <form className="w-full flex flex-col justify-center items-center h-36 mt-2 ">
            <Controller
              control={control}
              name="comment"
              render={({ field }) => (
                <Textarea
                  {...field}
                  placeholder={t("gamePage.textarea-placeholder")}
                  className="dark:bg-custom-gradient2 dark:text-orange2 dark:bg-black/20  h-full resize-none"
                  onKeyDown={onKeyPress}
                />
              )}
            />

            <Button
              onClick={handleSubmit(handleCommentAdd)}
              className="w-full dark:text-black bg-blue2 dark:bg-orange2/80 hover:dark:bg-orange2/60 mt-2"
            >
              {t("gamePage.send-comment")}
            </Button>
          </form>
        )}
      </div>
    </Card>
  );
};

export default CommentSection;
