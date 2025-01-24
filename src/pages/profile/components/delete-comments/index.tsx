import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useTranslation } from "react-i18next";
import CommentsCarusel from "./components/comments-carusel";

const DeleteComments: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Sheet key={"bottom"}>
      <SheetTrigger
        asChild
        className="m-0 p-0  flex justify-center items-center"
      >
        <Button variant="outline" className=" w-full bg-creemy">
          {t("profile.comments")}
        </Button>
      </SheetTrigger>
      <SheetContent side={"bottom"} className="h-[90%] bg-lightBlue border-none dark:bg-custom-gradient">
        <SheetHeader className=" pb-5 sm:pb-14 pt-4  ">
          <SheetTitle>{t("profile.delete-comments")}</SheetTitle>
          <SheetDescription>
            {t("profile.delete-comments-description")}
          </SheetDescription>
        </SheetHeader>
        <CommentsCarusel />
      </SheetContent>
    </Sheet>
  );
};

export default DeleteComments;
