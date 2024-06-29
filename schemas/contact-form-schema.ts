import { z } from "zod";

export const contactFormSchema = z
.object({
    name: z
    .string()
    .min(1, "Username is required")
    .min(3, "Username must be at least 3 characters")
    .max(30, "Username must be at most 30 characters")
    .regex(
      /^[a-zA-Z0-9_\s]+$/,
      "Invalid username. Letters, numbers, spaces or underscores only"
    )
    .regex(/^[a-zA-Z][a-zA-Z0-9_\s]*$/, "Username must start with a letter"),
  phone: z
  .string()
  .min(1, "Phone is required"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  body: z
  .string()
  .min(1, "Body is required")
  .max(30, "at most 30 characters"),
  
  date: z.string().min(1, "CategorySlug is required"),
  
})