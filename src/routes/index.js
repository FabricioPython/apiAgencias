import express from 'express';
import Agencia from '../routes/agenciasRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).sendFile(path.join(__dirname, "home.html"));
  });

  app.route("/home.js").get((req, res) => {
    res.status(200).sendFile(path.join(__dirname, "home.js"));
  });

  app.use(
    express.json(),
    Agencia
  );
};
  


export default routes;
