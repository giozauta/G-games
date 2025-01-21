import { cva } from "class-variance-authority";

export const containerStyles = cva(
  "flex flex-col h-auto sm:h-[594px] dark:bg-black",
  {
    variants: {
      isHome: {
        true: "dark:bg-custom-gradient",
        false: "dark:bg-custom-gradient2",
      },
    },
  },
);
