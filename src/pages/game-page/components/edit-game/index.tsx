import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

const GameEdit: React.FC = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full sm:w-auto bg-orange2 text-white dark:bg-orange2 dark:text-black">
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-orange2">Edit Game</DialogTitle>
          <DialogDescription>
            Make changes to your Game Info here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <Tabs defaultValue="english" className="w-full">
            <TabsList className="flex justify-center mb-4">
              <TabsTrigger className="w-1/2" value="english">English</TabsTrigger>
              <TabsTrigger className="w-1/2" value="georgian">Georgian</TabsTrigger>
            </TabsList>

            {/* ინგლისური Tab */}
            <TabsContent value="english">
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name-en" className="dark:text-green2 text-blue2">Name (English)</Label>
                  <Input id="name-en" placeholder="Name of your game (English)" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="description-en" className="dark:text-green2 text-blue2">Description (English)</Label>
                  <Textarea id="description-en" placeholder="Description of your game (English)" />
                </div>
              </div>
            </TabsContent>

            {/* ქართული Tab */}
            <TabsContent value="georgian">
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name-ka" className="dark:text-green2 text-blue2">Name (Georgian)</Label>
                  <Input id="name-ka" placeholder="Name of your game (Georgian)" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="description-ka" className="dark:text-green2 text-blue2">Description (Georgian)</Label>
                  <Textarea id="description-ka" placeholder="Description of your game (Georgian)" />
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* საერთო  */}
          <div className="grid w-full items-center gap-4 mt-6">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="year" className="dark:text-green2 text-blue2">Year</Label>
              <Input id="year" type="number" placeholder="Release year" />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="platform" className="dark:text-green2 text-blue2">Platform</Label>
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

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="image" className="dark:text-green2 text-blue2">Upload Image</Label>
              <Input id="image" type="file" accept="image/*" placeholder="Upload game image" />
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button type="submit" variant="outline">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default GameEdit;
