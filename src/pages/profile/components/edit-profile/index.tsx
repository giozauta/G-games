"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { FormValuesType, UserDataPropType } from "./types";
import { profileSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEditProfile } from "@/react-query/mutation/profile";

const EditProfile: React.FC<{
  userData: UserDataPropType;
  refetch: () => void;
}> = ({ userData, refetch }) => {
  const { control, handleSubmit } = useForm<FormValuesType>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      // english tab fields
      nameEn: userData?.first_name_en ?? "",
      lastNameEn: userData?.last_name_en ?? "",
      locationEn: userData?.location_en ?? "",
      genderEn: userData?.gender_en ?? "",
      // georgian tab fields
      nameKa: userData?.first_name_ka ?? "",
      lastNameKa: userData?.last_name_ka ?? "",
      locationKa: userData?.location_ka ?? "",
      genderKa: userData?.gender_ka ?? "",
      // phone field
      phone: userData?.phoneNumber ?? "",
      age: userData?.age ?? 0,
    },
  });

  const { mutate: editProfile } = useEditProfile();

  const { t } = useTranslation();

  const handleEditProfile = (event: FormValuesType) => {
    const newData = {
      first_name_en: event.nameEn,
      last_name_en: event.lastNameEn,
      location_en: event.locationEn,
      gender_en: event.genderEn,
      //
      first_name_ka: event.nameKa,
      last_name_ka: event.lastNameKa,
      location_ka: event.locationKa,
      gender_ka: event.genderKa,
      //
      phoneNumber: event.phone,
      age: event.age,
    };
    // გვჭირდება რომ შევამოწმოთ შევცვალეთ თუარა რამე ველი
    const isUnchanged = Object.entries(newData).every(
      ([key, value]) => userData[key as keyof typeof newData] === value,
    );

    if (isUnchanged) {
      alert(t("profile.no-changes"));
      return;
    }

    if (!userData?.id) {
      return;
    }
    editProfile(
      { userId: userData?.id, updates: newData },
      {
        onSuccess: () => {
          refetch();
          alert(t("profile.profile-success"));
        },
      },
    );
  };

  return (
    <div className="flex justify-start items-center ">
      <Sheet key={"right"}>
        <SheetTrigger asChild>
          <Button variant="outline" className="w-full bg-creemy">
            {t("profile.profile")}
          </Button>
        </SheetTrigger>

        <SheetContent
          side={"right"}
          className="bg-custom-gradient2 bg-creemy dark:bg-custom-gradient border-[#1f1f1f] text-black w-[91%] px-1 sm:px-6 b"
        >
          <SheetHeader>
            <SheetTitle className="dark:text-green2 text-orange2 ">
              {t("profile.edit-profile")}
            </SheetTitle>
            <SheetDescription>{t("profile.description")}</SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4 dark:text-white  ">
            <Tabs defaultValue="english" className="w-full">
              <TabsList className="flex justify-center mb-4 bg-gray-200">
                <TabsTrigger className="w-1/2" value="english">
                  {t("profile.english")}
                </TabsTrigger>
                <TabsTrigger className="w-1/2" value="georgian">
                  {t("profile.georgian")}
                </TabsTrigger>
              </TabsList>

              {/* ინგლისური Tab */}
              <TabsContent value="english">
                <div className="grid gap-4 ">
                  {["name", "lastName", "location", "gender"].map((names) => (
                    <div
                      key={names}
                      className="grid grid-cols-4 items-center gap-4 "
                    >
                      <Label
                        htmlFor={`${names.toLowerCase()}En`}
                        className="text-right text-blue2 dark:text-orange2  h-full pt-3"
                      >
                        {t(`profile.${names}`)}
                      </Label>

                      <Controller
                        control={control}
                        name={`${names}En` as keyof FormValuesType}
                        render={({ field, fieldState }) => {
                          return (
                            <div className="col-span-3">
                              <Input
                                {...field}
                                id={`${names.toLowerCase()}En`}
                                placeholder={t(`profilePlaceholder.${names}`)}
                                value={field.value ?? ""}
                              />

                              {fieldState.error?.message && (
                                <span className="text-red-600 text-sm">
                                  {t(
                                    `editProfileErrors.${fieldState.error?.message}${names}`,
                                  )}
                                </span>
                              )}
                            </div>
                          );
                        }}
                      />
                    </div>
                  ))}
                </div>
              </TabsContent>

              {/* ქართული Tab */}
              <TabsContent value="georgian">
                <div className="grid gap-4">
                  {["name", "lastName", "location", "gender"].map((names) => (
                    <div
                      key={names}
                      className="grid grid-cols-4 items-center gap-4"
                    >
                      <Label
                        htmlFor={`${names.toLowerCase()}Ka`}
                        className="text-right text-blue2 dark:text-orange2  h-full pt-3"
                      >
                        {t(`profile.${names}`)}
                      </Label>

                      <Controller
                        control={control}
                        name={`${names}Ka` as keyof FormValuesType}
                        render={({ field, fieldState }) => {
                          return (
                            <div className="col-span-3">
                              <Input
                                {...field}
                                id={`${names.toLowerCase()}Ka`}
                                placeholder={t(`profilePlaceholderKa.${names}`)}
                                value={field.value ?? ""}
                              />

                              {fieldState.error?.message && (
                                <span className=" text-red-600 text-sm ">
                                  {t(
                                    `editProfileErrors.${fieldState.error?.message}${names}`,
                                  )}
                                </span>
                              )}
                            </div>
                          );
                        }}
                      />
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            {/* Phone Field */}
            <div className="grid grid-cols-4 items-center gap-4 ">
              <Label
                htmlFor="phone"
                className="text-right text-blue2 dark:text-orange2"
              >
                {t(`profile.phone`)}
              </Label>

              <Controller
                control={control}
                name="phone"
                render={({ field, fieldState }) => {
                  return (
                    <div className="col-span-3">
                      <Input
                        {...field}
                        id="phone"
                        placeholder={t("profilePlaceholder.phone")}
                      />
                      {fieldState.error?.message && (
                        <span className=" text-red-600 text-sm">
                          {t(`editProfileErrors.${fieldState.error?.message}`)}
                        </span>
                      )}
                    </div>
                  );
                }}
              />
            </div>
            {/* Age Field */}
            <div className="grid grid-cols-4 items-center gap-4 ">
              <Label
                htmlFor="age"
                className="text-right text-blue2 dark:text-orange2  h-full pt-3"
              >
                {t(`profile.age`)}
              </Label>

              <Controller
                control={control}
                name="age"
                render={({ field, fieldState }) => {
                  return (
                    <div className="col-span-3">
                      <Input
                        {...field}
                        id="age"
                        type="number"
                        placeholder={t("profilePlaceholder.age")}
                        onChange={(e) => field.onChange(e.target.valueAsNumber)}
                      />
                      {fieldState.error?.message && (
                        <span className="text-red-600 text-sm">
                          {t(`editProfileErrors.${fieldState.error?.message}`)}
                        </span>
                      )}
                    </div>
                  );
                }}
              />
            </div>
          </div>

          <SheetFooter>
            <SheetClose asChild>
              <Button
                type="submit"
                className="dark:bg-green2 bg-orange2"
                onClick={handleSubmit(handleEditProfile)}
              >
                {t("profile.save")}
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default EditProfile;
