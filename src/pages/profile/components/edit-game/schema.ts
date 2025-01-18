import { z } from "zod";

export const addEditGameSchema = z.object({
  name_en: z.string().min(6, { message: "min" }).max(50, { message: "max" }),
  name_ka: z.string().min(6, { message: "min" }).max(50, { message: "max" }),
  description_en: z
    .string()
    .min(6, { message: "min" })
    .max(400, { message: "max" }),
  description_ka: z
    .string()
    .min(6, { message: "min" })
    .max(400, { message: "max" }),
  platform: z.enum(["xbox", "playstation", "pc"], {
    message: "platform",
  }),
  release_date: z.string().date(),
  image: z.any().refine((file) => file instanceof File, {
    message: "image",
  }),
});
