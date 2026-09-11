import express from "express";
import AgenciaController from "../controllers/AgenciaController.js";

const routes = express.Router();

routes.get("/agencia/:CGC", AgenciaController.getAgenciaByCGC);

routes.get("/agencia/:UF", AgenciaController.getAgencias);

routes.post("/agencia", AgenciaController.createAgencia);

routes.get("/info", AgenciaController.infoAgencia);

routes.get("/municipio/:cidade", AgenciaController.getMunicipios);

export default routes;