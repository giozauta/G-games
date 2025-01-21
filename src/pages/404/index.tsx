import { Button } from "@/components/ui/button";
import React from "react";
import { NavLink } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen   text-gray-800 text-center gap-6 px-6 py-8">
      <h1 className="text-6xl font-bold text-orange2">404</h1>
      <p className="text-lg font-medium text-gray-600">
        Sorry, we couldn't find that page.
      </p>
      <Button
        variant="green"
        className="p-5 hover:scale-125 transition-all duration-300 ease-in"
      >
        <NavLink
          to="/"
          className="w-full h-full flex justify-center items-center"
        >
          Back to Home
        </NavLink>
      </Button>
    </div>
  );
};

export default NotFound;
