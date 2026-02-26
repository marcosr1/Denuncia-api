import { Router } from "express";
import { criarDenuncia, listarDenuncias } from "../controllers/denunciaController.js";

const router = Router();

router.post("/denunciar", criarDenuncia);
router.get("/", listarDenuncias);

export default router;