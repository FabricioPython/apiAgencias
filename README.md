<div align="center">
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />
</div>

<h1 align="center" style="color: #4EA94B;">🏢 API de Agências</h1>

<p align="center" style="color: #555555; font-size: 1.2em;">
  Uma API RESTful robusta para consulta e gerenciamento de agências.
</p>

---

## 🎨 Sobre o Projeto

Este projeto é uma **API para gestão e consulta de agências**, desenvolvida com **Node.js, Express e MongoDB**. Ele permite buscar agências por diferentes critérios, como **CGC**, **Estado (UF)** e **Município**, além de possibilitar o cadastro de novas agências. O sistema também serve uma interface frontend simples localizada na pasta `public`.

A arquitetura foi pensada para ser escalável e pronta para deploy em plataformas como a **Vercel** (configurada via `vercel.json`).

---

## ✨ Funcionalidades

- 🔍 **Busca por CGC:** Encontre os dados de uma agência específica através do seu identificador CGC.
- 🗺️ **Busca por Estado (UF):** Liste todas as agências presentes em um determinado estado.
- 🏙️ **Busca por Município:** Consulte as agências localizadas em cidades específicas.
- ➕ **Cadastro de Agências:** Adicione novas agências ao banco de dados facilmente.
- 🌐 **Interface Web:** Acesse o frontend integrado diretamente pela rota principal (`/`).

---

## 🛠️ Tecnologias Utilizadas

A paleta de tecnologias escolhida garante um ecossistema rápido e moderno:

- **[Node.js](https://nodejs.org/):** Ambiente de execução Javascript 🟩 *(#43853D)*
- **[Express](https://expressjs.com/):** Framework web rápido e minimalista ⬛ *(#404D59)*
- **[MongoDB](https://www.mongodb.com/) & [Mongoose](https://mongoosejs.com/):** Banco de dados NoSQL e modelagem de objetos 🟩 *(#4EA94B)*
- **[Dotenv](https://www.npmjs.com/package/dotenv):** Gerenciamento de variáveis de ambiente 🟨 *(#ECD53F)*
- **[Vercel](https://vercel.com/):** Plataforma para hospedagem serverless ⬛ *(#000000)*

---

## 🚀 Como Executar o Projeto

Siga os passos abaixo para rodar o projeto localmente na sua máquina:

### 1. Pré-requisitos
- Ter o **Node.js** instalado.
- Ter acesso a um cluster do **MongoDB** (ou rodando localmente).

### 2. Instalação

```bash
# Navegue até o diretório do projeto
cd Agencias

# Instale as dependências
npm install
```

### 3. Configuração
Verifique o arquivo `.env` na raiz do projeto e ajuste suas variáveis de ambiente:
```env
PORT=3000
# Você deve configurar a sua string de conexão com o banco de dados de acordo com seu ambiente
```

### 4. Executando
Para iniciar o servidor, execute:
```bash
npm start
```
O servidor estará rodando em `http://localhost:3000` (ou a porta configurada no `.env`).

---

## 🔗 Endpoints Principais

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/agencia/:CGC` | Retorna os detalhes de uma agência específica pelo seu CGC. |
| `GET` | `/agencias/:UF` | Retorna a lista de agências localizadas em um determinado estado (UF). |
| `GET` | `/municipio/:cidade` | Retorna as agências localizadas em um município específico. |
| `GET` | `/info` | Retorna informações gerais. |
| `POST` | `/agencia` | Cadastra uma nova agência no sistema. |

---

<div align="center">
  <p>Desenvolvido com 💚</p>
</div>
