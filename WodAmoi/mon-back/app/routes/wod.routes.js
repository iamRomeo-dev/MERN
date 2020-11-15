module.exports = app => {
  const wods = require("../controllers/wod.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", wods.create);

  // Get all Tutorials
  router.get("/", wods.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", wods.findOne);

  // Update a Tutorial with id
  router.put("/:id", wods.update);

  // Delete a Tutorial with id
  router.delete("/:id", wods.delete);

  //lien pour rejoindre React
  app.use("/api/wods", router);
};
