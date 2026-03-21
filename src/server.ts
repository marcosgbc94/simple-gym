import "reflect-metadata";
import "./infrastructure/container";
import app from './app';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    console.log(`➡️  POST http://localhost:${PORT}/api/v1/muscles`);
});