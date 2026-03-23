import express from "express";
import { rootRouter } from "./presentation/http/routes/index";
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './infrastructure/http/swagger';

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api", rootRouter);

export default app;