import express from "express";
import { rootRouter } from "./presentation/http/routes/index";

const app = express();

app.use(express.json());

app.use("/api", rootRouter);

export default app;