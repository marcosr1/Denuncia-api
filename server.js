import dotenv from 'dotenv';
import app from './app.js';
import sequelize from './src/config/database.js';

dotenv.config();

const PORT = process.env.PORT || 3000;

try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("Conexão com o banco de dados estabelecida");
} catch ( error ) {
    console.error("Não foi possível conectar ao banco de dados:", error);
}

app.listen(PORT, () => {
    console.log("Servidor rodando na porta " + PORT);
});
