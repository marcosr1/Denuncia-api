import app from "../src/app.js";
import sequelize from "../src/config/database.js";

export default async function handler(req, res) {
  try {
    // conecta ao banco só quando a função é chamada
    await sequelize.authenticate();

    // passa a requisição para o Express
    return app(req, res);
  } catch (error) {
    console.error("ERRO NA FUNÇÃO:", error);
    return res.status(500).json({ ok: false, error: error.message });
  }
}