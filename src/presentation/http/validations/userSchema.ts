import { z } from "zod";

export const userResponseSchema = z.object({
    id: z.string(),
    email: z.string(),
    firstName: z.string(),
    firstLastName: z.string(),
    secondLastName: z.string().nullable(),
    isActive: z.boolean(),
    genderId: z.number(),
    statusId: z.number()
});

export type UserResponse = z.infer<typeof userResponseSchema>;