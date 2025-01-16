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
import { GameFormDataType, GameType } from "./types";
import { Controller, useForm } from "react-hook-form";
import { eddGameSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUpdateGame } from "@/react-query/mutation/game";

const GameEdit: React.FC<{ gameInfo: GameType }> = ({ gameInfo, }) => {
  const { t } = useTranslation();
  //
  const { control, handleSubmit } = useForm<GameFormDataType>({
    resolver: zodResolver(eddGameSchema),
    defaultValues: {
      name_en: gameInfo?.name_en ?? "",
      name_ka: gameInfo?.name_ka ?? "",
      description_en: gameInfo?.description_en ?? "",
      description_ka: gameInfo?.description_ka ?? "",
      platform: gameInfo?.platform ?? "",
      release_date: gameInfo?.release_date ?? "",
      image: null,
    },
  });
  //
const {mutate:updateGame} = useUpdateGame();
  //

  const handleEditGame = (values: GameFormDataType) => {

    if(!gameInfo.image_url){
      return
    }
    if(!values.image){
      return
    }

    updateGame({
      id:gameInfo.id,
      data:{
        name_en:values.name_en,
        name_ka:values.name_ka,
        description_en:values.description_en,
        description_ka:values.description_ka,
        platform:values.platform,
        release_date:values.release_date
      },
      image_file:values.image,
      old_image_url:gameInfo.image_url
    })

    console.log(values.image)
  };

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
                    render={({ field, fieldState }) => (
                      <>
                        <Input
                          {...field}
                          id="name_en"
                          placeholder={t("addGame.name-placeholderEn")}
                        />

                        <div className="text-red-500 text-sm">
                          {fieldState.error?.message}
                        </div>
                      </>
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
                    render={({ field, fieldState }) => (
                      <>
                        <Textarea
                          {...field}
                          id="description_en"
                          placeholder={t("addGame.description-placeholderEn")}
                        />
                        <div className="text-red-500 text-sm">
                          {fieldState.error?.message}
                        </div>
                      </>
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
                    render={({ field, fieldState }) => (
                      <>
                        <Input
                          {...field}
                          id="name-ka"
                          placeholder={t("addGame.name-placeholderKa")}
                        />
                        <div className="text-red-500 text-sm">
                          {fieldState.error?.message}
                        </div>
                      </>
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
                    render={({ field, fieldState }) => (
                      <>
                        <Textarea
                          {...field}
                          id="description-ka"
                          placeholder={t("addGame.description-placeholderKa")}
                        />
                        <div className="text-red-500 text-sm">
                          {fieldState.error?.message}
                        </div>
                      </>
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
                render={({ field, fieldState }) => (
                  <>
                    <Input
                      type="date"
                      {...field}
                      id="release_date"
                      placeholder={t("addGame.year-placeholder")}
                    />
                    <div className="text-red-500 text-sm">
                      {fieldState.error?.message}
                    </div>
                  </>
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
                render={({ field, fieldState }) => (
                  <>
                    <Select
                      onValueChange={(value) => field.onChange(value)}
                      value={field.value}
                    >
                      <SelectTrigger id="platform">
                        <SelectValue
                          placeholder={t("addGame.platform-placeholder")}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="xbox">Xbox</SelectItem>
                        <SelectItem value="playstation">Playstation</SelectItem>
                        <SelectItem value="pc">PC</SelectItem>
                      </SelectContent>
                    </Select>
                    <div className="text-red-500 text-sm">
                      {fieldState.error?.message}
                    </div>
                  </>
                )}
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="image" className="dark:text-green2 text-blue2">
                {t("addGame.image")}
              </Label>

              <Controller
                name="image"
                control={control}
                render={({ field, fieldState }) => (
                  <>
                    <Input
                      id="image"
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0] || null;
                        field.onChange(file);
                      }}
                    />
                    <div className="text-red-500 text-sm">
                      {fieldState.error?.message}
                    </div>
                  </>
                )}
              />
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button
            type="submit"
            variant="outline"
            onClick={handleSubmit(handleEditGame)}
          >
            {t("addGame.save")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default GameEdit;
