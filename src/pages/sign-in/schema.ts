import { z } from "zod";

export const signUpSchema = z.object({
  email: z
    .string()
    .email({ message: "invalid-email" })
    .min(6, { message: "min" })
    .max(50, { message: "max" }),
  password: z.string().min(6, { message: "min" }).max(50, { message: "max" }),
});
