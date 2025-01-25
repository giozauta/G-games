import { z } from "zod";

const englishRegex = /^[a-zA-Z0-9\s.,:;!?'"()\-_]*$/;
const georgianRegex = /^[ა-ჰ0-9\s.,:;!?'"()\-_]*$/;

export const addGameSchema = z.object({
  nameEn: z
    .string()
    .min(1, { message: "min-name" })
    .max(50, { message: "max-name" })
    .refine((val) => englishRegex.test(val), {
      message: "only-english",
    }),

  nameKa: z
    .string()
    .min(1, { message: "min-name" })
    .max(50, { message: "max-name" })
    .refine((val) => georgianRegex.test(val), {
      message: "only-georgian",
    }),

  descriptionEn: z
    .string()
    .min(6, { message: "min-description" })
    .max(900, { message: "max-description" })
    .refine((val) => englishRegex.test(val), {
      message: "only-english",
    }),

  descriptionKa: z
    .string()
    .min(6, { message: "min-description" })
    .max(900, { message: "max-description" })
    .refine((val) => georgianRegex.test(val), {
      message: "only-georgian",
    }),

  platform: z.enum(["xbox", "playstation", "pc"], {
    message: "platform",
  }),

  releaseDate: z.string().date(),

  image: z.any().refine((file) => file instanceof File, {
    message: "image",
  }),
});
