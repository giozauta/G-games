import { z } from "zod";

export const profileSchema = z.object({
  nameEn: z.string().min(1, "Name is required"),
  lastNameEn: z.string().min(1, "Last name is required"),
  locationEn: z.string().min(1, "Location is required"),
  genderEn: z.string().min(1, "Gender is required"),

  nameKa: z.string().min(1, "Name is required"),
  lastNameKa: z.string().min(1, "Last name is required"),
  locationKa: z.string().min(1, "Location is required"),
  genderKa: z.string().min(1, "Gender is required"),

  phone: z.string().min(1, "Phone number is required"),
  age: z
    .string()
    .regex(/^\d*$/, "Age must be a number")
    .min(1, "Age is required"),
});
