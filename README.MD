# 🏎️ Formula 1 API - Fastify

Uma API minimalista desenvolvida com **Fastify** e **TypeScript** para disponibilizar informações sobre equipes e pilotos da Fórula 1.

## 📋 Descrição

Este projeto simula uma pequena API REST contendo dados das equipes e pilotos da Fórula 1.

A aplicação foi criada com foco em:

* Estrutura simples e organizada
* Performance utilizando Fastify
* Conceitos básicos de APIs REST
* Rotas dinâmicas
* Manipulação de JSON
* Uso de TypeScript no backend

---

# 🚀 Tecnologias Utilizadas

* Node.js
* TypeScript
* Fastify

---

# 📁 Estrutura do Projeto

```bash
📦 formula1-api
 ┣ 📜 server.ts
 ┣ 📜 package.json
 ┣ 📜 tsconfig.json
 ┗ 📜 README.md
```

---

# ⚙️ Instalação

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/formula1-api.git
```

Acesse a pasta do projeto:

```bash
cd formula1-api
```

Instale as dependências:

```bash
npm install
```

---

# ▶️ Executando o Projeto

Modo desenvolvimento:

```bash
npm run dev
```

Ou execute diretamente:

```bash
npx tsx server.ts
```

Servidor iniciado em:

```bash
http://localhost:3000
```

---

# 📌 Endpoints

## 🔹 Listar equipes

### Request

```http
GET /teams
```

### Response

```json
[
  {
    "id": 1,
    "name": "Mercedes",
    "base": "Brackley"
  }
]
```

---

## 🔹 Listar pilotos

### Request

```http
GET /drivers
```

### Response

```json
[
  {
    "id": 1,
    "name": "Kimi Antonelli",
    "team": "Mercedes"
  }
]
```

---

## 🔹 Buscar piloto por ID

### Request

```http
GET /drivers/:id
```

### Exemplo

```http
GET /drivers/3
```

### Response

```json
{
  "id": 3,
  "name": "Max Verstappen",
  "team": "Red Bull Racing"
}
```

---

# ❌ Tratamento de Erros

Caso o piloto não exista:

```json
{
  "error": "Driver not found"
}
```

Status retornado:

```http
404 Not Found
```

---

# 🎯 Objetivos do Projeto

Este projeto foi desenvolvido para praticar:

* Criação de APIs REST
* Rotas com parâmetros
* Fastify
* TypeScript
* Organização backend
* Retorno de dados em JSON

---

# 🔮 Melhorias Futuras

* Integração com banco de dados
* CRUD completo
* Separação em controllers e routes
* Docker
* Validação com Zod
* Testes automatizados
* Swagger Documentation

---

# 📚 Aprendizados

Durante o desenvolvimento deste projeto foram aplicados conceitos importantes de backend moderno utilizando Fastify e TypeScript, reforçando fundamentos essenciais para APIs performáticas e escaláveis.

---

# 👨‍💻 Autor

Desenvolvido por Gabriel Manfio 🚀
