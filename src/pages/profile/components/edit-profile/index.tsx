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
import { useTranslation } from "react-i18next";

const SHEET_SIDES = ["right"] as const;

type EditProfile = (typeof SHEET_SIDES)[number];

const EditProfile: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-2 gap-2 ">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="green" className="w-28">
              {t("profile.edit-profile")}
            </Button>
          </SheetTrigger>
          <SheetContent
            side={side}
            className="bg-custom-gradient2 bg-[white] border-[#1f1f1f] text-black"
          >
            <SheetHeader>
              <SheetTitle className="dark:text-green2 text-orange2">
                {t("profile.edit-profile")}
              </SheetTitle>
              <SheetDescription>{t("profile.description")}</SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4 dark:text-white">
              <Tabs defaultValue="english" className="w-full">
                <TabsList className="flex justify-center mb-4">
                  <TabsTrigger className="w-1/2" value="english">
                    {t("profile.english")}
                  </TabsTrigger>
                  <TabsTrigger className="w-1/2" value="georgian">
                    {t("profile.georgian")}
                  </TabsTrigger>
                </TabsList>

                {/* ინგლისური Tab */}
                <TabsContent value="english">
                  <div className="grid gap-4">
                    {["name", "location", "gender", "age"].map((field) => (
                      <div
                        key={field}
                        className="grid grid-cols-4 items-center gap-4"
                      >
                        <Label
                          htmlFor={`${field.toLowerCase()}-en`}
                          className="text-right text-blue2 dark:text-orange2"
                        >
                          {t(`profile.${field}`)}
                        </Label>
                        <Input
                          id={`${field.toLowerCase()}-en`}
                          placeholder={t(`profilePlaceholder.${field}`)}
                          className="col-span-3"
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>

                {/* ქართული Tab */}
                <TabsContent value="georgian">
                  <div className="grid gap-4">
                    {["name", "location", "gender", "age"].map((field) => (
                      <div
                        key={field}
                        className="grid grid-cols-4 items-center gap-4"
                      >
                        <Label
                          htmlFor={`${field.toLowerCase()}-ka`}
                          className="text-right text-blue2 dark:text-orange2"
                        >
                          {t(`profile.${field}`)}
                        </Label>
                        <Input
                          id={`${field.toLowerCase()}-ka`}
                          placeholder={t(`profilePlaceholderKa.${field}`)}
                          className="col-span-3"
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>

              {/* Phone Field */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label
                  htmlFor="phone"
                  className="text-right text-blue2 dark:text-orange2"
                >
                  {t(`profile.phone`)}
                </Label>
                <Input
                  id="phone"
                  type="number"
                  placeholder={t("profile.phone-placeholder")}
                  className="col-span-3"
                />
              </div>
            </div>

            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit" className="dark:bg-green2 bg-orange2">
                  {t("profile.save")}
                </Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
};

export default EditProfile;
