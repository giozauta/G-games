"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import EditProfile from "../edit-profile";
import EditComments from "../edit-comments";
import { UserDataPropType } from "../edit-profile/types";
import { Pencil } from "lucide-react";
import { useTranslation } from "react-i18next";

const EditSwitch: React.FC<{
  userData: UserDataPropType;
  refetch: () => void;
}> = ({ refetch, userData }) => {
  const { t } = useTranslation();
  const [position, setPosition] = React.useState("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="green"
          className="  flex  justify-center  items-center "
        >
          <Pencil />
          <span>{t("profile.edit")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full bg-lightBlue">
        <DropdownMenuRadioGroup
          className="flex flex-col gap-1"
          value={position}
          onValueChange={setPosition}
        >
          <EditProfile refetch={refetch} userData={userData} />
          <EditComments />
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default EditSwitch;
