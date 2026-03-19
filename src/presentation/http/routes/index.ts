// src/presentation/routes.ts
import { Router } from "express";
import { muscleRouter } from "./v1/muscleRoutes";

const rootRouter = Router();

// Versión 1 de la API
rootRouter.use("/v1/muscles", muscleRouter);

export { rootRouter };