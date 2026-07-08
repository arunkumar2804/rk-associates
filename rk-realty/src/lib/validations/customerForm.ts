import * as z from "zod";

export const customerFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian mobile number"),
  email: z.string().email("Please enter a valid email address").or(z.literal("")),
  interestedProperty: z.string().optional(),
  message: z.string().optional(),
});

export type CustomerFormValues = z.infer<typeof customerFormSchema>;
