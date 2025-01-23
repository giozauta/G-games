import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useTranslation } from "react-i18next";

const EditComments: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Drawer>
      <DrawerTrigger className="m-0 p-0  flex justify-center items-center">
        <Button variant="outline" className=" w-full bg-creemy">
          {t("profile.comments")}
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-[70%]">
        <DrawerHeader>
          <DrawerTitle>Edit/Delete Comment</DrawerTitle>
          <DrawerDescription>
            In here you can edit/remove your comments from the games
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default EditComments;
