import express from 'express';
import Agencia from '../routes/agenciasRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routes = (app) => {
  // Vercel e express.static servirão a pasta public automaticamente

  app.use(
    express.json(),
    Agencia
  );
};
  


export default routes;
