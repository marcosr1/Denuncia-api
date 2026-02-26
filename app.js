import express from "express";
import cors from "cors";
import denunciaRoutes from "./src/routes/denunciaRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(denunciaRoutes);

export default app;
