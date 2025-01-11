import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription } from "@/components/ui/card";

const GamePage: React.FC = () => {
  return (
    <div className=" dark:bg-custom-gradient h-[650px] flex justify-center items-center ">
      <Card className="w-[650px]  mx-auto p-6 ">
        <CardContent className="gap-5 p-0 flex justify-between flex-col sm:flex-row">
          <div className=" flex ">
            {" "}
            <img
              src="/public/images/ghostGame.webp"
              alt="game"
              className="rounded-md"
            />
          </div>
          <div className=" flex justify-center ">
            <Button
              variant="outline"
              className="w-full sm:w-auto bg-orange2 text-white dark:bg-orange2 dark:text-black"
            >
              Edit
            </Button>
          </div>
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
