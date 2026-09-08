import express from "express";
import AgenciasController from "../src/controllers/agenciasController.js";

const router = express.Router();
router.get("/",AgenciasController.openAgencia);

router.get("/agencia/:id", AgenciasController.getAgenciaById);

router.get("/agencias", AgenciasController.getAgencias);

router.post("/agencias", AgenciasController.createAgencia);

export default router;