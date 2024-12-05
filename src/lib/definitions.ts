import { z } from "zod";

export const ContactSchema = z.object({
  firstName: z
        .string()
        .trim()
        .min(1, {message: "First name is required"}),
  lastName: z
        .string()
        .trim()
        .min(1, {message: "Last name is required"}),
  email: z
        .string()
        .trim()
        .min(1, {message: "Email address is required"})
        .email({message: "Invalid email address"}),
  phone: z
        .string()
        .trim()
        .min(1, {message: "Phone number is required"})
        .regex(/^\+?\d{9,15}$/, { message: "Invalid phone number format" }),
  service: z
      .enum(['Web Development','API Development','Optimization or Scaling','Maintenance or Support',], { message: "A service is required" })
      .optional(),
  message: z
        .string()
        .trim()
        .min(1, {message: "Message is required"}),
});


export type ContactType = z.infer<typeof ContactSchema>;

export function validateField <K extends keyof ContactType> (field: K, value: string) {
    const singleFieldSchema = z.object({ [field]: ContactSchema.shape[field] });
    return singleFieldSchema.safeParse({ [field]: value });
}