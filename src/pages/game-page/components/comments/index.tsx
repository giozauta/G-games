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
    return (
      <Card className="w-full md:w-[90%] lg:w-[400px] lg:px-10 min-h-[600px] p-6 mr-2 sm:border border-none bg-[#fcfbf5] rounded-none sm:rounded-xl sm:shadow-lg dark:bg-custom-gradient lg:dark:bg-custom-gradient2 flex flex-col shadow-none">
        {/* Game Info Section */}
        <div className="flex flex-col flex-grow w-full border">
          <CardHeader className="p-0 py-4 dark:text-orange2 text-blue2">
            <CardTitle>Game comments</CardTitle>
            <CardDescription>
              You can add a comment if you are registered
            </CardDescription>
          </CardHeader>
  
          {/* Scrollable Comment Area */}
          <ScrollArea className=" overflow-y-scroll flex-grow mb-4 h-[300px]">
            {/* Here, you can map over an array of comments */}
            <div>{gameInfo.id}</div>
            <div>komentarebi</div>
            <div>komentarebi</div>
            <div>komentarebi</div>
            <div>komentarebi</div>

          </ScrollArea>
  
          {/* Comment Textarea */}
          <Textarea
            placeholder="Comment here"
            className="dark:bg-custom-gradient2 dark:text-orange2 bg-blue2 text-white"
          />
        </div>
  
        {/* Comment Section (Send button) */}
        <div className="h-16 border">
          <Button className="w-full dark:text-black bg-blue2 dark:bg-orange2/80 hover:dark:bg-orange2/60">
            Send comment
          </Button>
        </div>
      </Card>
    );
  };
  
  export default CommentSection;
  