import { Router } from "express";
import { muscleRouter } from "./v1/muscleRoutes";
import { userRouter } from "./v1/userRoutes";

const rootRouter = Router();

// Versión 1 de la API
rootRouter.use("/v1/muscles", muscleRouter);
rootRouter.use("/v1/users", userRouter);

export { rootRouter };