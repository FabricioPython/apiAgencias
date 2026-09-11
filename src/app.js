import express from "express";
import connectToDatabases from "./config/dbconect.js";
import routes from "./routes/index.js";

const db = await connectToDatabases();

db.on("error", console.log.bind(console, "Erro de conexão"));

db.once("open", () => {
    console.log("Conexão com o banco feita com sucesso!");
});


const app = express();
routes(app);


export default app;