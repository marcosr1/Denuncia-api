import { Router } from "express";
import { criarDenuncia, listarDenuncias, updateStatus, votarDenuncia, updateImagem, deletarDenuncia } from "../controllers/denunciaController.js";
import { limiter, voteLimiter } from "../middlewares/rateLimit.js";

const router = Router();
router.get("/api", (req, res) => {
  res.json({ message: "API funcionando!" });
});

router.get("/", listarDenuncias);

router.post("/denunciar", criarDenuncia);
router.patch("/votar/:id", voteLimiter, votarDenuncia);
router.patch("/status/:id", updateStatus);
router.patch("/imagem/:id", updateImagem);

router.delete("/:id", deletarDenuncia); 

export default router;