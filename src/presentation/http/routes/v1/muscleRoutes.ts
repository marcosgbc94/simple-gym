// src/modules/muscles/presentation/muscle.routes.ts
import { Router } from "express";
import { MuscleController } from "../../../controllers/MuscleController";
import { GetMuscleByIdUseCase } from "../../../../application/use-cases/GetMuscleByIdUseCase";
import { MuscleRepositorySupabase } from "../../../../data/repositories/MuscleRepositorySupabase";

const muscleRouter = Router();

const repository = new MuscleRepositorySupabase();
const useCase = new GetMuscleByIdUseCase(repository);
const controller = new MuscleController(useCase);

muscleRouter.get("/:id", (req, res) => controller.getById(req, res));

export { muscleRouter };