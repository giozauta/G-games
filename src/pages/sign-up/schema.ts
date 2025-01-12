import {z} from "zod";


export const signUpSchema = z
.object({
    name: z.string().min(3).max(50),
    email: z.string().email().min(3).max(50),
    password: z.string().min(6).max(50),
    confirmPassword: z.string().min(6).max(50)
})
.refine(data => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
})