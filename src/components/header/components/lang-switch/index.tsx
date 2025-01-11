import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LangSwitch: React.FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className=" bg-transparent dark:bg-transparent border-none hover:bg-transparent hover:dark:bg-transparent hover:text-[#64d100] dark:hover:text-[#64d100] focus:outline-none focus:ring-0 shadow-none"
        asChild
      >
        <Button className="bg-transparent dark:bg-transparent hover:bg-transparent hover:dark:bg-transparent hover:text-[#64d100] dark:hover:text-[#64d100] shadow-none">
          <Globe className="w-4 h-4 text-black dark:text-white" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>English</DropdownMenuItem>
        <DropdownMenuItem>Georgian</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LangSwitch;
