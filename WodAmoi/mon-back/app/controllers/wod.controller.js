const db = require("../models");
const WOD = db.wods;

// Create and Save a new WOD
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a WOD
  const woddy = new WOD({
    title: req.body.title,
    team: req.body.team,
    description: req.body.description,
    duration: req.body.duration
  });

  // Save WOD in the database
  woddy
    .save(woddy)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Wod."
      });
    });
};

// Get all WODs from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  WOD.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while getting wods."
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  WOD.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Wod with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error to get Wod with id=" + id });
    });
};

// Update a Wod by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  WOD.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Can not update Wod with id=${id}. Maybe TutoWodrial was not found!`
        });
      } else res.send({ message: "Wod was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error to update Wod with id=" + id
      });
    });
};

// Delete a Wod with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  WOD.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Can not delete Wod with id=${id}. Maybe Wod was not found!`
        });
      } else {
        res.send({
          message: "Wod was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error to delete Wod with id=" + id
      });
    });
};

