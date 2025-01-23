import React, { useState } from "react";
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
import { addEditGameSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUpdateGame } from "@/react-query/mutation/profile-game-carusel";

const GameEdit: React.FC<{ gameInfo: GameType; refetch: () => void }> = ({
  gameInfo,
  refetch,
}) => {
  const { t } = useTranslation();
  const [isDialogOpen, setIsDialogOpen] = useState(false); // State to control dialog visibility

  const { control, handleSubmit } = useForm<GameFormDataType>({
    resolver: zodResolver(addEditGameSchema),
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

  const { mutate: updateGame } = useUpdateGame();

  const handleEditGame = (values: GameFormDataType) => {
    if (!gameInfo.image_url) {
      return;
    }
    if (!values.image) {
      return;
    }

    updateGame(
      {
        id: gameInfo.id,
        data: {
          name_en: values.name_en,
          name_ka: values.name_ka,
          description_en: values.description_en,
          description_ka: values.description_ka,
          platform: values.platform,
          release_date: values.release_date,
        },
        image_file: values.image,
        old_image_url: gameInfo.image_url,
      },
      {
        onSuccess() {
          refetch();
          setIsDialogOpen(false); // ფანჯარა დაიხურება როდესაც სურათი დააფდეითდება
        },
      },
    );
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button
          variant="orange"
          className="w-[75%]"
          onClick={() => setIsDialogOpen(true)}
        >
          {t("profile.edit")}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-creemy">
        <DialogHeader>
          <DialogTitle className="text-orange2">
            {t("profile.editGame")}
          </DialogTitle>
          <DialogDescription>
            {t("profile.editGameInstruction")}
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4 ">
          <Tabs defaultValue="english" className="w-full ">
            <TabsList className="flex justify-center mb-4 bg-gray-200">
              <TabsTrigger className="w-1/2" value="english">
                {t("profile.english")}
              </TabsTrigger>
              <TabsTrigger className="w-1/2" value="georgian">
                {t("profile.georgian")}
              </TabsTrigger>
            </TabsList>

            {/* English Tab */}
            <TabsContent value="english">
              <div className="grid w-full items-center gap-4 ">
                <div className="flex flex-col space-y-1.5">
                  <Label
                    htmlFor="name-en"
                    className="dark:text-green2 text-blue2"
                  >
                    {t("profile.name")}({t("profile.english")})
                  </Label>
                  <Controller
                    control={control}
                    name="name_en"
                    render={({ field, fieldState }) => (
                      <>
                        <Input
                          {...field}
                          id="name_en"
                          placeholder={t(
                            "profilePlaceholder.name-placeholderEn",
                          )}
                        />
                        {fieldState.error?.message && (
                          <div className="text-red-500 text-sm">
                            {t(`addGameErrors.${fieldState.error?.message}`)}
                          </div>
                        )}
                      </>
                    )}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label
                    htmlFor="description-en"
                    className="dark:text-green2 text-blue2"
                  >
                    {t("profile.game-description")}({t("profile.english")})
                  </Label>

                  <Controller
                    name="description_en"
                    control={control}
                    render={({ field, fieldState }) => (
                      <>
                        <Textarea
                          {...field}
                          id="description_en"
                          placeholder={t(
                            "profilePlaceholder.description-placeholderEn",
                          )}
                        />
                        {fieldState.error?.message && (
                          <div className="text-red-500 text-sm">
                            {t(`addGameErrors.${fieldState.error?.message}`)}
                          </div>
                        )}
                      </>
                    )}
                  />
                </div>
              </div>
            </TabsContent>

            {/* Georgian Tab */}
            <TabsContent value="georgian">
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label
                    htmlFor="name-ka"
                    className="dark:text-green2 text-blue2"
                  >
                    {t("profile.name")}({t("profile.georgian")})
                  </Label>
                  <Controller
                    name="name_ka"
                    control={control}
                    render={({ field, fieldState }) => (
                      <>
                        <Input
                          {...field}
                          id="name-ka"
                          placeholder={t(
                            "profilePlaceholderKa.name-placeholderKa",
                          )}
                        />
                        {fieldState.error?.message && (
                          <div className="text-red-500 text-sm">
                            {t(`addGameErrors.${fieldState.error?.message}`)}
                          </div>
                        )}
                      </>
                    )}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label
                    htmlFor="description-ka"
                    className="dark:text-green2 text-blue2"
                  >
                    {t("profile.game-description")}({t("profile.georgian")})
                  </Label>
                  <Controller
                    name="description_ka"
                    control={control}
                    render={({ field, fieldState }) => (
                      <>
                        <Textarea
                          {...field}
                          id="description-ka"
                          placeholder={t(
                            "profilePlaceholderKa.description-placeholderKa",
                          )}
                        />
                        {fieldState.error?.message && (
                          <div className="text-red-500 text-sm">
                            {t(`addGameErrors.${fieldState.error?.message}`)}
                          </div>
                        )}
                      </>
                    )}
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* General */}
          <div className="grid w-full items-center gap-4 mt-6">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="year" className="dark:text-green2 text-blue2">
                {t("profile.year")}
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
                      placeholder={t("profilePlaceholder.year-placeholder")}
                    />
                    {fieldState.error?.message && (
                      <div className="text-red-500 text-sm">
                        {t(`addGameErrors.${fieldState.error?.message}`)}
                      </div>
                    )}
                  </>
                )}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="platform" className="dark:text-green2 text-blue2">
                {t("profile.platform")}
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
                          placeholder={t(
                            "profilePlaceholder.platform-placeholder",
                          )}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="xbox">Xbox</SelectItem>
                        <SelectItem value="playstation">Playstation</SelectItem>
                        <SelectItem value="pc">PC</SelectItem>
                      </SelectContent>
                    </Select>
                    {fieldState.error?.message && (
                      <div className="text-red-500 text-sm">
                        {t(`addGameErrors.${fieldState.error?.message}`)}
                      </div>
                    )}
                  </>
                )}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="image" className="dark:text-green2 text-blue2">
                {t("profile.image")}
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
                    {fieldState.error?.message && (
                      <div className="text-red-500 text-sm">
                        {t(`addGameErrors.${fieldState.error?.message}`)}
                      </div>
                    )}
                  </>
                )}
              />
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button
            type="submit"
            className="bg-orange2 dark:bg-green2"
            onClick={handleSubmit(handleEditGame)}
          >
            {t("profile.save")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default GameEdit;
