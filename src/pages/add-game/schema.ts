import { z } from "zod";

export const addGameSchema = z.object({
  nameEn: z.string().min(6/*, { message: "min" }*/).max(50/*, { message: "max" }*/),
  nameKa: z.string().min(6/*,{ message: "min" }*/).max(50/*, { message: "max" }*/),
  descriptionEn: z
    .string()
    .min(6/*, { message: "min" }*/)
    .max(50/*, { message: "max" }*/),
  descriptionKa: z
    .string()
    .min(6/*, { message: "min" }*/)
    .max(50/*, { message: "max" }*/),
    platform: z.enum(["xbox", "playstation", "pc"], { message: "Platform must be Xbox, PlayStation, or PC" }),
    releaseDate: z
    .date(),
    image: z
    .any()
    .refine((file) => file instanceof File, { message: "Please upload a valid file" }),
  });
