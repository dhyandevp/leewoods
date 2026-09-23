import { z } from "zod";

export const projectTypes = [
  "Complete home interior",
  "Modular kitchen",
  "Wardrobe & storage",
  "Living & TV unit",
  "Office interior",
  "Custom furniture",
  "Other",
] as const;

export const budgetRanges = [
  "Under ₹5 lakh",
  "₹5–10 lakh",
  "₹10–20 lakh",
  "₹20 lakh+",
  "To be discussed",
] as const;

export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100, "Name is too long"),
  email: z.string().trim().email("Enter a valid email address").max(255, "Email is too long"),
  phone: z
    .string()
    .trim()
    .regex(/^[+\d][\d\s()-]{6,29}$/, "Enter a valid phone number"),
  projectType: z.enum(projectTypes, {
    errorMap: () => ({ message: "Please select a project type" }),
  }),
  projectLocation: z
    .string()
    .trim()
    .min(2, "Enter the project location")
    .max(150, "Location is too long"),
  budget: z.enum(budgetRanges, {
    errorMap: () => ({ message: "Please select an estimated budget range" }),
  }),
  message: z
    .string()
    .trim()
    .min(10, "Tell us a little more about your project")
    .max(1500, "Message must be under 1,500 characters"),
  website: z.string().max(0, "Invalid submission"),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;
