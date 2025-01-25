import { z } from "zod";

const englishRegex = /^[a-zA-Z0-9\s.,:;!?'"()\-_]*$/;
const georgianRegex = /^[ა-ჰ0-9\s.,:;!?'"()\-_]*$/;

export const addEditGameSchema = z.object({
  name_en: z
    .string()
    .min(1, { message: "min-name" })
    .max(50, { message: "max-name" })
    .refine((val) => englishRegex.test(val), {
      message: "only-english",
    }),

  name_ka: z
    .string()
    .min(1, { message: "min-name" })
    .max(50, { message: "max-name" })
    .refine((val) => georgianRegex.test(val), {
      message: "only-georgian",
    }),

  description_en: z
    .string()
    .min(6, { message: "min-description" })
    .max(900, { message: "max-description" })
    .refine((val) => englishRegex.test(val), {
      message: "only-english",
    }),

  description_ka: z
    .string()
    .min(6, { message: "min-description" })
    .max(900, { message: "max-description" })
    .refine((val) => georgianRegex.test(val), {
      message: "only-georgian",
    }),

  platform: z.enum(["xbox", "playstation", "pc"], {
    message: "platform",
  }),

  release_date: z.string().date(),

  image: z.any().refine((file) => file instanceof File, {
    message: "image",
  }),
});
