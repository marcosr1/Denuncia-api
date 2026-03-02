import express from "express";
import cors from "cors";
import denunciaRoutes from "./src/routes/denunciaRoutes.js";
import sequelize from "./src/config/database.js"

const app = express();

app.use(cors());
app.use(express.json());

app.use(denunciaRoutes);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexão com o banco estabelecida");
    await sequelize.sync();
    console.log("Banco sincronizado");
  } catch (error) {
    console.error("Erro ao conectar/sincronizar o banco:", error);
  }
})();

export default app;
