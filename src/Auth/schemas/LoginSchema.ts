import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("emailInvalid"),
  password: z.string().min(6, { message: "passwordMustBeAtleast6" }),
});

export type LoginSchema = z.infer<typeof loginSchema>;

export default loginSchema;
