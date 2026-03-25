// src/infrastructure/http/middlewares/AuthMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import { supabase } from '../../../config/supabaseClient';

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Token no proporcionado' });
  }

  const token = authHeader.split(' ')[1];

  try {
    // Validamos el token con Supabase
    const { data: { user }, error } = await supabase.auth.getUser(token);

    if (error || !user) {
      return res.status(401).json({ error: 'Token inválido o expirado' });
    }

    // Guardamos el UUID en el objeto request para usarlo en los controladores
    (req as any).user = user; 
    
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Error de autenticación' });
  }
};