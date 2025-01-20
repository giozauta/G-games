import { cva } from "class-variance-authority";

export const heroTextSize = cva(
  ["hover:scale-110 transition-all duration-500  ease-in-out"],
  {
    variants: {
      lang: {
        en: ["text-6xl  sm:text-6xl lg:text-7xl xl:text-8xl "],
        ka: [
          "text-[45px] sm:text-5xl md:text-4xl  lg:text-5xl xl:text-7xl pb-0 sm:pb-5 ",
        ],
      },
    },
    defaultVariants: {
      lang: "en",
    },
  },
);

export const heroMiddleTextSize = cva(
  ["text-orange2 hover:scale-110 transition-all duration-500 ease-in-out"],
  {
    variants: {
      lang: {
        en: ["text-6xl  sm:text-6xl lg:text-7xl xl:text-8xl"],
        ka: [
          "text-[45px] sm:text-5xl md:text-4xl  lg:text-5xl xl:text-7xl pb-0 sm:pb-5 ",
        ],
      },
    },
    defaultVariants: {
      lang: "en",
    },
  },
);
