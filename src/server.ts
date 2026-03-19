import app from './app';

// Usamos el puerto de las variables de entorno, o el 3000 por defecto
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Servidor de gimnasio corriendo en http://localhost:${PORT}`);
    console.log(`Endpoints disponibles:`);
    console.log(`➡️  POST http://localhost:${PORT}/api/v1/muscles`);
    console.log(`➡️  GET  http://localhost:${PORT}/api/v1/muscles/:id`);
});