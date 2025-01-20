import { z } from "zod";

export const addGameSchema = z.object({
  nameEn: z.string().min(6, { message: "min" }).max(50, { message: "max" }),
  nameKa: z.string().min(6, { message: "min" }).max(50, { message: "max" }),
  descriptionEn: z
    .string()
    .min(6, { message: "min" })
    .max(900, { message: "maxDescription" }),
  descriptionKa: z
    .string()
    .min(6, { message: "min" })
    .max(900, { message: "maxDescription" }),
  platform: z.enum(["xbox", "playstation", "pc"], {
    message: "platform",
  }),
  releaseDate: z.string().date(),
  image: z.any().refine((file) => file instanceof File, {
    message: "image",
  }),
});
