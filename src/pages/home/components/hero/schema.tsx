import { cva } from "class-variance-authority";

export const heroTextSize = cva([""], {
  variants: {
    lang: {
      en: ["text-6xl  sm:text-6xl lg:text-7xl xl:text-8xl"],
      ka: ["text-5xl  sm:text-5xl lg:text-6xl xl:text-7xl pb-5"],
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
      ka: ["text-5xl  sm:text-5xl lg:text-6xl xl:text-7xl pb-5"],
    },
  },
  defaultVariants: {
    lang: "en",
  },
});
