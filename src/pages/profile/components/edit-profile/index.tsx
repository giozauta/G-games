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

const SHEET_SIDES = ["right"] as const;

type EditProfile = (typeof SHEET_SIDES)[number];

const EditProfile: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="green" className=" w-28">
              Edit Profile
            </Button>
          </SheetTrigger>
          <SheetContent
            side={side}
            className="bg-custom-gradient2 bg-[white] border-[#1f1f1f] text-black"
          >
            <SheetHeader>
              <SheetTitle className="dark:text-green2 text-orange2">
                Edit profile
              </SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4 dark:text-white">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label
                  htmlFor="name"
                  className="text-right text-blue2 dark:text-orange2"
                >
                  Name
                </Label>
                <Input id="name" value="name" className="col-span-3 " />
              </div>
              <div className="grid grid-cols-4 items-center gap-4 ">
                <Label
                  htmlFor="email"
                  className="text-right text-blue2 dark:text-orange2"
                >
                  Email
                </Label>
                <Input id="email" value="email" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4 ">
                <Label
                  htmlFor="phone"
                  className="text-right text-blue2 dark:text-orange2"
                >
                  Phone
                </Label>
                <Input id="phone" value="phone" className="col-span-3" />
              </div>

              <div className="grid grid-cols-4 items-center gap-4 ">
                <Label
                  htmlFor="location"
                  className="text-right text-blue2 dark:text-orange2"
                >
                  Location
                </Label>
                <Input id="location" value="location" className="col-span-3" />
              </div>

              <div className="grid grid-cols-4 items-center gap-4 ">
                <Label
                  htmlFor="gender"
                  className="text-right text-blue2 dark:text-orange2"
                >
                  Gender
                </Label>
                <Input id="gender" value="gender" className="col-span-3" />
              </div>

              <div className="grid grid-cols-4 items-center gap-4 ">
                <Label
                  htmlFor="age"
                  className="text-right text-blue2 dark:text-orange2"
                >
                  Age
                </Label>
                <Input id="age" value="age" className="col-span-3" />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit" className="dark:bg-green2 bg-orange2">
                  Save changes
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
