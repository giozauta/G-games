import { Button } from "@/components/ui/button";
import React from "react";
import { NavLink } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      404 Not Found
      <Button variant={"outline"}>
        <NavLink to="/">Go Home</NavLink>
      </Button>
    </div>
  );
};

export default NotFound;
