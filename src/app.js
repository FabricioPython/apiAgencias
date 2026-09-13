import express from "express";
import connectToDatabases from "./config/dbconect.js";
import routes from "./routes/index.js";

const app = express();
app.use(express.static('public')); // Serve os arquivos HTML/JS locais

connectToDatabases().then(db => {
    db.on("error", console.log.bind(console, "Erro de conexão"));
    db.once("open", () => {
        console.log("Conexão com o banco feita com sucesso!");
    });
});
routes(app);


export default app;