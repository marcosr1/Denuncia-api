# 🏙️ Sistema de Denúncia Anônima com Mapa
API backend para registro de denúncias urbanas anônimas  
(ex: lixo, iluminação, barulho, problemas públicos).

Projeto pensado para **cidades pequenas**, **ONGs** e **iniciativas sociais**.

---

## 🚀 Funcionalidades
- 📌 Criação de denúncias **sem login** Anônimas 
- 🗺️ Localização via coordenadas (DMS → decimal)
- 🧾 Tipos de denúncia (lixo, barulho, iluminação, etc.)
- 👍 Sistema de votos que aumenta a prioridade da denuncia
- 🕒 Status de acompanhamento tempo que a denuncia foi deferida
- 🛡️ Rate limit + anti-spam
- 🔐 Endpoint exclusivo para moderação

---

## 🧱 Stack utilizada
- Node.js
- Express
- PostgreSQL
- Sequelize 
- ES Modules
- Turf
- Cors
- Dotenv
- Express-rate-limit
- Mongoose

---

## 📂 Estrutura do projeto
```bash
src/
├── config/
│ └── database.js
├── controllers/
│ └── denunciaController.js
├── models/
│ └── Denuncia.js
│ └── Index.js
├── data/
│ └── cep63488000.js
├── routes/
│ └── denunciaRoutes.js
├── utils/
│ └── dmsToDecimal.js
│ └── validarCEP.js
├── middlewares/
│ ├── rateLimit.js 
├── server.js
└── app.js
```

---

## 🗺️ Formato de localização aceito

A API recebe 

```txt
latitude:
longetude:
```

# 🔗 Endpoints principais
## ➕ Criar denúncia
```bash
POST /denunciar
```
envia:
```json
{
  "tipo": "lixo",
  "descricao": "Lixo acumulado na praça",
  "latitude": "loc",
  "longetude": "loc"
}
```

## 📄 Listar denúncias
```bash
GET /
```

## 👍 Votar em denúncia
```bash
POST /votar/:id
```

AUTOR:
Marcos Richelly