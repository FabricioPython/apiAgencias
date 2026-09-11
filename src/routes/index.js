import express from 'express';
import Agencia from '../routes/agenciasRoutes.js';



const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).sendFile("routes/home.html", { root: "src" });
  });

  app.use(
    express.json(),
    Agencia
  );
};
  


export default routes;
