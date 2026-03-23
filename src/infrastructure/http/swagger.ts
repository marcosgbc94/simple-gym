import swaggerJSDoc from 'swagger-jsdoc';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Simple Gym API',
      version: '1.0.0',
      description: 'API para la gestión de ejercicios y músculos de gimnasio',
    },
    servers: [
      {
        url: 'http://localhost:3000/api/v1',
        description: 'Servidor Local',
      },
    ],
  },
  // Rutas donde Swagger buscará los comentarios de documentación
  apis: [
    `./src/presentation/http/routes/v1/*.ts`, 
    `./src/infrastructure/http/routes/v1/*.ts`
  ], 
};

export const swaggerSpec = swaggerJSDoc(options);