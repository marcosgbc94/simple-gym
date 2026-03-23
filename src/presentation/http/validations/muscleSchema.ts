import { z } from "zod";

export const muscleResponseSchema = z.object({
    id: z.string(),
    name: z.string(),
    group: z.string(),
    description: z.string(),
    isActive: z.boolean()
});

export type MuscleResponse = z.infer<typeof muscleResponseSchema>;