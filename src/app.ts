import express from "express";
import { rootRouter } from "./presentation/http/routes/index";

const app = express();
app.use(express.json());

app.use("/api", rootRouter);

app.listen(3000, () => {
    console.log("🚀 Gym API v1 corriendo en http://localhost:3000/api/v1/muscles");
});