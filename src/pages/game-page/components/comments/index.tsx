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

const CommentSection: React.FC<{ gameInfo: GameInfoType }> = ({ gameInfo }) => {
  console.log(gameInfo);
  return (
    <Card className="w-full   md:w-[90%]  lg:w-[400px] lg:px-10 min-h-[600px] p-6 mr- sm:border border-none bg-[#fcfbf5] rounded-none sm:rounded-xl sm:shadow-lg dark:bg-custom-gradient lg:dark:bg-custom-gradient flex flex-col shadow-none ">
      <div className="flex flex-col flex-grow  w-full  ">
        <CardHeader className=" dark:text-orange2 text-blue2 h-16 p-0 flex justify-center items-start ">
          <CardTitle>Game comments</CardTitle>
          <CardDescription>
            You can add a comment if you are registered
          </CardDescription>
        </CardHeader>

        <ScrollArea className="overflow-y-scroll flex-grow h-60 mt-4 border dark:bg-black/20 dark:border-white/10 p-5  rounded-md hide-scrollbar sm:hover:visible-scrollbar">
          <div className="border p-2 rounded-sm dark:border-white/10 mb-2 h-auto">
            <p>gio</p>
            <p className="text-sm ">kargi tamashia tamashia a</p>
          </div>
        </ScrollArea>

        <div className="w-full flex flex-col justify-center items-center h-36 mt-2 ">
          <Textarea
            placeholder="Comment here"
            className="dark:bg-custom-gradient2 dark:text-orange2 dark:bg-black/20  h-full resize-none"
          />
          <Button className="w-full dark:text-black bg-blue2 dark:bg-orange2/80 hover:dark:bg-orange2/60 mt-2">
            Send comment
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CommentSection;
