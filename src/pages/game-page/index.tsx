import { Card, CardContent, CardDescription } from "@/components/ui/card";
import GameEdit from "./components/edit-game";
import { useAtom } from "jotai";
import { userAtom } from "@/store/jotai";

const GamePage: React.FC = () => {
  const [user] = useAtom(userAtom);


  return (
    <div className=" dark:bg-custom-gradient sm:h-[750px] flex justify-center items-center ">
      <Card className="w-[650px]   mx-auto p-6  sm:border-[1px]  border-none bg-[#fcfbf5] shadow-lg  dark:bg-custom-gradient2">
        <CardContent className="gap-5 p-0 flex justify-between flex-col sm:flex-row">
          <div className=" flex ">
            <img
              src="/images/ghostGame.webp"
              alt="game"
              className="rounded-md"
            />
          </div>
          {user&& (
            <div className=" flex justify-center ">
              <GameEdit />
            </div>
          )}
        </CardContent>
        <CardDescription className="p-0  pt-4 ">
          likes date platform
        </CardDescription>
        <CardContent className=" p-0 pt-4 text-3xl text-orange2">
          Apex Legend
        </CardContent>
        <CardContent className=" p-0 pt-4">
          Tournaments All Finished Playing Playing upcoming Playing AAG Axie Cup
          Torneo Individual 20 $20 Free Entry Nov 30, 6:44 AM 3/12 42 Finished
          Azariaria’s Battlegrounds Bienvenidos a AAG Blast Cup 50 $50 Free
          Entry Nov 30, 6:43 AM 3/12 42 Stay up to date Have questions or
          feedback? We'd love to hear from you. Reach out
        </CardContent>
      </Card>
    </div>
  );
};

export default GamePage;
