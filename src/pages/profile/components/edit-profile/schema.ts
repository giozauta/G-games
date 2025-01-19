import { z } from "zod";

export const profileSchema = z.object({
  nameEn: z.string().min(1, "min").max(15, "max"),
  lastNameEn: z.string().min(1, "min").max(15, "max"),
  locationEn: z.string().min(1, "min").max(15, "max"),
  genderEn: z.string().min(1, "min").max(10, "max"),

  nameKa: z.string().min(1, "min").max(15, "max"),
  lastNameKa: z.string().min(1, "min").max(15, "max"),
  locationKa: z.string().min(1, "min").max(15, "max"),
  genderKa: z.string().min(1, "min").max(10, "max"),

  phone: z.string().min(1, "minPhone").max(15, "maxPhone"),
  age: z.number({ message: "receivedNan" }).min(1, "minAge").max(100, "maxAge"),
});
