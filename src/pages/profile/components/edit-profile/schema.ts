import { z } from "zod";

// Define regex for English and Georgian
const englishRegex = /^[a-zA-Z0-9\s.,:;!?'"()\-_]*$/;
const georgianRegex = /^[ა-ჰ0-9\s.,:;!?'"()\-_]*$/;

export const profileSchema = z.object({
  nameEn: z
    .string()
    .min(1, "min")
    .max(15, "max")
    .regex(englishRegex, "only-english"),

  lastNameEn: z
    .string()
    .min(1, "min")
    .max(15, "max")
    .regex(englishRegex, "only-english"),

  locationEn: z
    .string()
    .min(1, "min")
    .max(15, "max")
    .regex(englishRegex, "only-english"),

  genderEn: z
    .string()
    .min(1, "min")
    .max(10, "max")
    .regex(englishRegex, "only-english"),

  nameKa: z
    .string()
    .min(1, "min")
    .max(15, "max")
    .regex(georgianRegex, "only-georgian"),

  lastNameKa: z
    .string()
    .min(1, "min")
    .max(15, "max")
    .regex(georgianRegex, "only-georgian"),

  locationKa: z
    .string()
    .min(1, "min")
    .max(15, "max")
    .regex(georgianRegex, "only-georgian"),

  genderKa: z
    .string()
    .min(1, "min")
    .max(10, "max")
    .regex(georgianRegex, "only-georgian"),

  phone: z.string().min(1, "minPhone").max(15, "maxPhone"),

  age: z.number({ message: "receivedNan" }).min(1, "minAge").max(100, "maxAge"),
});
