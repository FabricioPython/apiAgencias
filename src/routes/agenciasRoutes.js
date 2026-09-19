import express from "express";
import AgenciaController from "../controllers/AgenciaController.js";

const routes = express.Router();

routes.get("/", (req, res) => {
  res.status(301).redirect("/index.html");
});

routes.get("/agencia/:CGC", AgenciaController.getAgenciaByCGC);

routes.get("/agencias/:UF", AgenciaController.getAgencias);

routes.post("/agencia", AgenciaController.createAgencia);

routes.get("/info", AgenciaController.infoAgencia);

routes.get("/municipio/:cidade", AgenciaController.getMunicipios);

export default routes;