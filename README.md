# 🏙️ Sistema de Denúncia Anônima com Mapa
API backend para registro de denúncias urbanas anônimas  
(ex: lixo, iluminação, barulho, problemas públicos).

Projeto pensado para **cidades pequenas**, **ONGs** e **iniciativas sociais**.

Oi, eu sou o Marcos, quero fazer esse projeto para ajudar a minha cidade a se desenvolver e se tornar um lugar melhor, com o objetivo de reportar problemas na infraestrutura da cidade, onde os próprios cidadões reportem esses problemas proximos de sua casa.

Haverá atualizações e um Frontend ainda em desenvolvimento!!!

Obrigado pela sua atenção e aguarde!

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
- tem limitador de denunciar ant flood
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
---
## 📄 Listar denúncias
- lista todas denuncias(séra apenas para os admins)
```bash
GET /
```
---

## 👍 Votar em denúncia
- limite de 10 votos em cada denúncia criada
```bash
POST /votar/:id
```
---

## Mudar status da denúncia
- Muda o status da denuncia de novo, iniciado, em andamento, finalizado.
```bash
PATCH /status/:id
```
---

## Inserir imagens
- Inserir imagens do local
```bash
PATCH /imagem/:id
```
---

## Deletar denúncia
- Apagar denúncias finalizadas
```bash
DELETE /:id
```

AUTOR:
Marcos Richelly