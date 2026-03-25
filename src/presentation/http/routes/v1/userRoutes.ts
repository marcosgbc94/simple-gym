import { Router } from "express";
import { UserController } from "../../../controllers/UserController";
import { authMiddleware } from '../../../../infrastructure/http/middlewares/AuthMiddleware';
import { container } from "tsyringe";

const userRouter = Router();

const controller = container.resolve(UserController);

/**
 * @openapi
 * /users/{id}:
 *  get:
 *   summary: Obtener un usuario por ID
 *   security:
 *    - bearerAuth: []
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *      description: Identificador único del usuario
 *      schema:
 *          type: string
 *   responses:
 *    200:
 *     description: Usuario encontrado con éxito
 *    404:
 *     description: No se encontró el usuario
 */
userRouter.get("/:id", authMiddleware, (req, res) => controller.getById(req, res));

export { userRouter };