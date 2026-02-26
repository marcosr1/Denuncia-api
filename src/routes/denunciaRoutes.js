import { Router } from "express";
import { criarDenuncia, listarDenuncias, updateDenuncia, votarDenuncia } from "../controllers/denunciaController.js";
import { limiter, voteLimiter } from "../middlewares/rateLimit.js";

const router = Router();

router.post("/denunciar", limiter, criarDenuncia);
router.patch("/votar/:id", voteLimiter, votarDenuncia);
router.patch("/atualizar/:id", updateDenuncia);

router.get("/", listarDenuncias);

export default router;