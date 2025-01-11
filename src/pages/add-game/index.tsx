import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const AddGame: React.FC = () => {
  return (
    <div className=" flex justify-center items-center font-chakra-petch min-h-[650px] dark:bg-custom-gradient">
      <Card className="w-[400px] bg-custom-gradient">
        <CardHeader>
          <CardTitle>Add Game</CardTitle>
          <CardDescription>You can add a new game here</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              {/* game name */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Name of your game" />
              </div>

              {/* release year */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="year">Year</Label>
                <Input id="year" type="number" placeholder="Release year" />
              </div>

              {/* platform */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="platform">Platform</Label>
                <Select>
                  <SelectTrigger id="platform">
                    <SelectValue placeholder="Select a platform" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="xbox">Xbox</SelectItem>
                    <SelectItem value="playstation">Playstation</SelectItem>
                    <SelectItem value="pc">PC</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* game description */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Write a brief description of the game"
                />
              </div>

              {/* upload Image */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="image">Upload Image</Label>
                <Input
                  id="image"
                  type="file"
                  accept="image/*"
                  placeholder="Upload game image"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button>Add Game</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AddGame;
