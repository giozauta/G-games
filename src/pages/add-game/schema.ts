import { z } from "zod";

// Regex for English characters
const englishRegex = /^[a-zA-Z\s]*$/; 

// Regex for Georgian characters
const georgianRegex = /^[\u10A0-\u10FF\s]*$/; 

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

  image: z
    .any()
    .refine((file) => file instanceof File, {
      message: "image",
    }),
});
