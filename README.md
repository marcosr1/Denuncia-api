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
- 🕒 Status de acompanhamento tempo que a denuncia foi 
- 🛡️ Rate limit + anti-spam
- 🔐 Endpoint exclusivo para moderação

---

## 🧱 Stack utilizada
- Node.js
- Express
- PostgreSQL
- Sequelize 
- ES Modules

---

## 📂 Estrutura do projeto
```bash
src/
├── controllers/
│ └── denunciaController.js
├── models/
│ └── Denuncia.js
├── routes/
│ └── denunciaRoutes.js
├── utils/
│ └── parseDMS.js
├── middlewares/
│ ├── rateLimit.js
│ └── authModerador.js
├── database/
│ └── index.js
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
POST /denunciar`
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
GET /denuncias
```

## 👍 Votar em denúncia
```bash
POST /votar/:id
```