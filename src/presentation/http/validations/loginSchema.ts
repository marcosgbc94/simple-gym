import { z } from 'zod';

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, "El correo es obligatorio") 
    .email("Formato de correo electrónico inválido")
    .trim()
    .toLowerCase(),
    
  password: z
    .string()
    .min(1, "La contraseña es obligatoria")
    .min(6, "La contraseña debe tener al menos 6 caracteres")
});

export type LoginDTO = z.infer<typeof LoginSchema>;