import dotenv from 'dotenv';
import http from "http";
import { Server } from "socket.io";
import app from './app.js';
import sequelize from './src/config/database.js';

dotenv.config();

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

export const io = new Server( server, {
    cors: {origin: "*"}
});

io.on("connection", (socket) => {
    console.log("usuario conectado", socket.id);

    socket.on("disconnect", () => {
        console.log("usuario desconectado")    
    })
})

try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("Conexão com o banco de dados estabelecida");
} catch ( error ) {
    console.error("Não foi possível conectar ao banco de dados:", error);
}

server.listen(PORT, () => {
    console.log("Servidor rodando na porta " + PORT);
});
