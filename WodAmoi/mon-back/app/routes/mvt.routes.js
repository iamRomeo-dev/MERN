module.exports = app => {
  const mesMvts = require("../controllers/mvt.controller.js");

  var router = require("express").Router();

  // Creation d'un nouveau mvt
  router.post("/", mesMvts.create);

  // Recuperation de tout les mvts
  router.get("/", mesMvts.findAll);

  // // Recuperation d'un seul mvt par id
  router.get("/:id", mesMvts.findOne);

  // // Modifie un mvt avec id
  router.put("/:id", mesMvts.update);

  // // Supprime un mvt avec id
  router.delete("/:id", mesMvts.delete);

  //lien pour rejoindre Angular
  app.use('/api/mvts', router);
};