import express from 'express';
// Asegúrate de que esta ruta coincida con donde guardaste tu archivo de rutas
import { muscleRoutes } from './data/http/routes/v1/muscleRoutes';

const app = express();

// Middleware fundamental: Le dice a Express que procese los JSON que enviamos en el Body (POST)
app.use(express.json());

// Versionado de API: Todas las rutas dentro de muscleRoutes colgarán de esta URL base
app.use('/api/v1/muscles', muscleRoutes);

// Exportamos 'app' para que server.ts (y en el futuro Jest) puedan usarlo
export default app;