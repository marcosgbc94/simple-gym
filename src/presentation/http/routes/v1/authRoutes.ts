// src/infrastructure/http/routes/AuthRoutes.ts
import { Router } from "express";
import { AuthController } from "../../../controllers/AuthController";

const router = Router();
const authController = new AuthController();

/**
 * @openapi
 * /api/v1/auth/login:
 * post:
 * tags:
 * - Auth
 * summary: Iniciar sesión en el sistema
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * type: object
 * required:
 * - email
 * - password
 * properties:
 * email:
 * type: string
 * example: marcos@gym.com
 * password:
 * type: string
 * example: 123456
 * responses:
 * 200:
 * description: Login exitoso
 * 401:
 * description: Credenciales incorrectas
 */
router.post("/login", (req, res) => authController.login(req, res));

export default router;