import { cva } from "class-variance-authority";

export const headerClasses = cva(
  "header dark:bg-transparent sm:bg-none px-2 lg:px-32 flex flex-col h-auto sm:flex-row sm:h-[90px] sm:items-center justify-between sticky top-0 z-50 mx-auto",
  {
    variants: {
      isProfilePage: {
        true: "text-white",
        false: "",
      },
    },
  },
);

export const navbarWrapperClasses = cva(
  "flex flex-col w-full h-full sm:flex sm:w-[57%] sm:flex-row sm:items-center sm:justify-between",
  {
    variants: {
      isHidden: {
        true: "hidden",
        false: "flex",
      },
    },
  },
);
