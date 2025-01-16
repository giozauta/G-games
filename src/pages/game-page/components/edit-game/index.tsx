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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useTranslation } from "react-i18next";
import { GameNewDataType, GameType } from "./types";
import { Controller, useForm } from "react-hook-form";

const GameEdit: React.FC<{gameInfo: GameType}>= ({gameInfo}) => {
  const { t } = useTranslation();
  //
  const {control, handleSubmit} = useForm<GameNewDataType>({
    defaultValues: {
      name_en: gameInfo?.name_en??"",
      name_ka: gameInfo?.name_ka??"",
      description_en: gameInfo?.description_en??"",
      description_ka: gameInfo?.description_ka??"",
      platform: gameInfo?.platform??"",
      release_date: gameInfo?.release_date??"",
    },
  })
//

const handleEditGame = (data: GameNewDataType) => {
  console.log(data)
}

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="w-full sm:w-auto bg-orange2 text-white dark:bg-orange2 dark:text-black "
        >
          {t("addGame.edditGame")}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-orange2">
            {t("addGame.edditGame")}
          </DialogTitle>
          <DialogDescription>
            {t("addGame.edditGameInstruction")}
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <Tabs defaultValue="english" className="w-full">
            <TabsList className="flex justify-center mb-4">
              <TabsTrigger className="w-1/2" value="english">
                {t("addGame.english")}
              </TabsTrigger>
              <TabsTrigger className="w-1/2" value="georgian">
                {t("addGame.georgian")}
              </TabsTrigger>
            </TabsList>

            {/* ინგლისური Tab */}
            <TabsContent value="english">
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label
                    htmlFor="name-en"
                    className="dark:text-green2 text-blue2"
                  >
                    {t("addGame.name")}({t("addGame.english")})
                  </Label>
                  <Controller
                    control={control}
                    name="name_en"
                    render={({ field }) => (
                      <Input
                        {...field}
                        id="name_en"
                        placeholder={t("addGame.name-placeholderEn")}
                      />
                    )}
                  
                  />
 

                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label
                    htmlFor="description-en"
                    className="dark:text-green2 text-blue2"
                  >
                    {t("addGame.description")}({t("addGame.english")})
                  </Label>

                    <Controller
                      name="description_en"
                      control={control}
                      render={({ field }) => (
                        <Textarea
                          {...field}
                          id="description_en"
                          placeholder={t("addGame.description-placeholderEn")}
                        />
                      )}
                    />



                </div>
              </div>
            </TabsContent>

            {/* ქართული Tab */}
            <TabsContent value="georgian">
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label
                    htmlFor="name-ka"
                    className="dark:text-green2 text-blue2"
                  >
                    {t("addGame.name")}({t("addGame.georgian")})
                  </Label>
<Controller
  name="name_ka"
  control={control}
  render={({ field }) => (
    <Input
      {...field}
      id="name-ka"
      placeholder={t("addGame.name-placeholderKa")}
    />
  )}
/>



                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label
                    htmlFor="description-ka"
                    className="dark:text-green2 text-blue2"
                  >
                    {t("addGame.description")}({t("addGame.georgian")})
                  </Label>
<Controller
  name="description_ka"
  control={control}
  render={({ field }) => (
    <Textarea
      {...field}
      id="description-ka"
      placeholder={t("addGame.description-placeholderKa")}
    />
  )}
/>


                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* საერთო  */}
          <div className="grid w-full items-center gap-4 mt-6">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="year" className="dark:text-green2 text-blue2">
                {t("addGame.year")}
              </Label>

  <Controller
    name="release_date"
    control={control}
    render={({ field }) => (
      <Input
        {...field}
        id="release_date"
       
        placeholder={t("addGame.year-placeholder")}
      />
    )}
  />


            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="platform" className="dark:text-green2 text-blue2">
                {t("addGame.platform")}
              </Label>


              <Controller
  name="platform"
  control={control}
  render={({ field }) => (
    <Select
      onValueChange={(value) => field.onChange(value)}
      value={field.value}
    >
      <SelectTrigger id="platform">
        <SelectValue placeholder={t("addGame.platform-placeholder")} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="xbox">Xbox</SelectItem>
        <SelectItem value="playstation">Playstation</SelectItem>
        <SelectItem value="pc">PC</SelectItem>
      </SelectContent>
    </Select>
  )}
/>


            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="image" className="dark:text-green2 text-blue2">
                {t("addGame.image")}
              </Label>

              <Input
                id="image"
                type="file"
                accept="image/*"
                placeholder="Upload game image"
              />

            </div>
          </div>
        </div>

        <DialogFooter>
          <Button type="submit" variant="outline" onClick={handleSubmit(handleEditGame)}>
            {t("addGame.save")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default GameEdit;
