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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { AddGameTypes } from "./types";
import { zodResolver } from "@hookform/resolvers/zod";
import { addGameSchema } from "./schema";
import { useUpdateBlog } from "@/react-query/mutation/add-game";
import { useAtom } from "jotai";
import { userAtom } from "@/store/jotai";

const AddGame: React.FC = () => {
  const { control, handleSubmit, formState, reset } = useForm<AddGameTypes>({
    resolver: zodResolver(addGameSchema),
    defaultValues: {
      nameEn: "",
      nameKa: "",
      descriptionEn: "",
      descriptionKa: "",
      platform: "",
      releaseDate: "",
      image: "",
    },
  });
  //
  const [user] = useAtom(userAtom);
  const userId = user?.user?.id ?? "";
  //
  const { t } = useTranslation();
  //
  const { mutate: AddGame } = useUpdateBlog();
  //
  const handleAddGame = (formValues: AddGameTypes) => {
    if (!formValues || !formValues.image || !formValues.image.name) {
      console.error("Invalid form values or image data.");
      return;
    }

    const sanitizedFileName = formValues.image.name.replace(
      /[^a-zA-Z0-9.\-_]/g,
      "_",
    );
    const fileName = `${sanitizedFileName}-${Date.now()}`;

    const imageFile = formValues.image;

    const newGameValues = {
      description_en: formValues.descriptionEn,
      description_ka: formValues.descriptionKa,
      user_id: userId,
      name_en: formValues.nameEn,
      name_ka: formValues.nameKa,
      platform: formValues.platform,
      release_date: formValues.releaseDate,
    };
    // ვამატებთ სუპაბეისში
    AddGame(
      {
        fileName: fileName,
        file: imageFile,
        newGameValues: newGameValues,
      },
      {
        onSuccess: () => {
          alert(t("addGame.success"));
        },
      },
    );
    //იმისთვის რომ ფორმის მნიშვნელობები დავაბრუნოთ საწყისზე
    reset();
  };

  //
  return (
    <div className=" flex  py-10 justify-center items-center font-chakra-petch min-h-[750px] dark:bg-custom-gradient ">
      <Card className="w-[500px] dark:bg-custom-gradient shadow-lg  border-none bg-creemy ">
        <CardHeader>
          <CardTitle className="text-orange2 text-2xl">
            {t("addGame.addGame")}
          </CardTitle>
          <CardDescription>{t("addGame.instruction")}</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="english" className="w-full ">
            <TabsList className="flex justify-center mb-4 bg-gray-200">
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
                    {t("addGame.name")} ({t("addGame.english")})
                  </Label>
                  <Controller
                    name="nameEn"
                    control={control}
                    render={({ field }) => {
                      return (
                        <Input
                          {...field}
                          placeholder={t("addGame.name-placeholderEn")}
                        />
                      );
                    }}
                  />
                  {formState.errors?.nameEn?.message && (
                    <p className="text-red-500">
                      {t(`addGameErrors.${formState.errors?.nameEn?.message}`)}
                    </p>
                  )}
                </div>

                <div className="flex flex-col space-y-1.5">
                  <Label
                    htmlFor="description-en"
                    className="dark:text-green2 text-blue2"
                  >
                    {t("addGame.description")} ({t("addGame.english")})
                  </Label>

                  <Controller
                    name="descriptionEn"
                    control={control}
                    render={({ field }) => {
                      return (
                        <Textarea
                          {...field}
                          placeholder={t("addGame.description-placeholderEn")}
                        />
                      );
                    }}
                  />
                  {formState.errors?.descriptionEn?.message && (
                    <p className="text-red-500">
                      {t(
                        `addGameErrors.${formState.errors?.descriptionEn?.message}`,
                      )}
                    </p>
                  )}
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
                    {t("addGame.name")} ({t("addGame.georgian")})
                  </Label>

                  <Controller
                    name="nameKa"
                    control={control}
                    render={({ field }) => {
                      return (
                        <Input
                          {...field}
                          placeholder={t("addGame.description-placeholderKa")}
                        />
                      );
                    }}
                  />
                  {formState.errors?.nameEn?.message && (
                    <p className="text-red-500">
                      {t(`addGameErrors.${formState.errors?.nameEn?.message}`)}
                    </p>
                  )}
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label
                    htmlFor="description-ka"
                    className="dark:text-green2 text-blue2"
                  >
                    {t("addGame.description")} ({t("addGame.georgian")})
                  </Label>
                  <Controller
                    name="descriptionKa"
                    control={control}
                    render={({ field }) => {
                      return (
                        <Textarea
                          {...field}
                          placeholder={t("addGame.description-placeholderKa")}
                        />
                      );
                    }}
                  />
                  {formState.errors?.descriptionKa?.message && (
                    <p className="text-red-500">
                      {t(
                        `addGameErrors.${formState.errors?.descriptionKa?.message}`,
                      )}
                    </p>
                  )}
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* საერთო */}
          <div className="grid w-full items-center gap-4 mt-6">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="year" className="dark:text-green2 text-blue2">
                {t("addGame.year")}
              </Label>

              <Controller
                name="releaseDate"
                control={control}
                render={({ field }) => {
                  return (
                    <Input
                      {...field}
                      type="date"
                      placeholder={t("addGame.year-placeholder")}
                    />
                  );
                }}
              />

              {formState.errors?.releaseDate?.message && (
                <p className="text-red-500">
                  {t(`addGameErrors.${formState.errors?.releaseDate?.message}`)}
                </p>
              )}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="platform" className="dark:text-green2 text-blue2">
                {t("addGame.platform")}
              </Label>

              <Controller
                name="platform"
                control={control}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
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
                )}
              />

              {formState.errors?.platform?.message && (
                <p className="text-red-500">
                  {t(`addGameErrors.${formState.errors?.platform?.message}`)}
                </p>
              )}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="image" className="dark:text-green2 text-blue2">
                {t("addGame.image")}
              </Label>

              <Controller
                name="image"
                control={control}
                render={({ field }) => (
                  <Input
                    required
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      if (e.target.files) {
                        field.onChange(e.target.files[0]);
                      }
                    }}
                  />
                )}
              />

              {formState.errors?.image?.message && (
                <p className="text-red-500">
                  {t(`addGameErrors.${formState.errors?.image?.message}`)}
                </p>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            onClick={handleSubmit(handleAddGame)}
            variant="outline"
            className="w-full sm:w-auto bg-orange2 text-white"
          >
            {t("addGame.addGame")}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AddGame;
