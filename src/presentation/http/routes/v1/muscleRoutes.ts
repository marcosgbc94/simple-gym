// src/modules/muscles/presentation/muscle.routes.ts
import { Router } from "express";
import { MuscleController } from "../../../controllers/MuscleController";
import { container } from "tsyringe";

const muscleRouter = Router();

const controller = container.resolve(MuscleController);

/**
 * @openapi
 * /muscles/{id}:
 *  get:
 *   summary: Obtener un músculo por ID
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *      description: Identificador único del músculo
 *      schema:
 *      type: string
 *   responses:
 *    200:
 *     description: Músculo encontrado con éxito
 *    404:
 *     description: No se encontró el músculo
 */
muscleRouter.get("/:id", (req, res) => controller.getById(req, res));

export { muscleRouter };