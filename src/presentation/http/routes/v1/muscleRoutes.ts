// src/modules/muscles/presentation/muscle.routes.ts
import { Router } from "express";
import { MuscleController } from "../../../controllers/MuscleController";
import { container } from "tsyringe";

const muscleRouter = Router();

const controller = container.resolve(MuscleController);

muscleRouter.get("/:id", (req, res) => controller.getById(req, res));

export { muscleRouter };