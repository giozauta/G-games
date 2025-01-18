import { cva } from "class-variance-authority";

export const heroTextSize = cva([""], {
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
});

export const heroMiddleTextSize = cva(["text-orange2 "], {
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
});
