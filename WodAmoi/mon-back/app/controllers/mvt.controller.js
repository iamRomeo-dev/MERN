const db = require("../models_mvt");
const Entrainement = db.mvts;

// Create and Save a new WOD
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  
  // Crée un mouvement
  const entraineMoi = new Entrainement({
    title: req.body.title,
    repetition: req.body.repetition,
    weight: req.body.weight,
    firstname: req.body.firstname
  });

  // Save Tutorial in the database
  entraineMoi
  .save(entraineMoi)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Mouvement."
    });
  });
  };

  // Get all WODs from the database.
  exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
  
    Entrainement.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving mouvement."
        });
      });
  };





// // Create and Save a new Tutorial
// exports.create = (req, res) => {
  
// };

// // Retrieve all entrainement from the database.
// exports.findAll = (req, res) => {
  
// };

// // Find a single Tutorial with an id
// exports.findOne = (req, res) => {
  
// };

// // Update a Tutorial by the id in the request
// exports.update = (req, res) => {
  
// };

// // Delete a Tutorial with the specified id in the request
// exports.delete = (req, res) => {
  
// };

// // Find all published entrainement
// exports.findAllPublished = (req, res) => {
  
// };


// exports.create = (req, res) => {
//   // Validate request
//   if (!req.body.title) {
//     res.status(400).send({ message: "Content can not be empty!" });
//     return;
//   }

//   // Crée un mouvement
//   const entraineMoi = new Entrainement({
//     title: req.body.title,
//     date: req.body.date,
//     poids: req.body.poids,
//   });

//   // Save Tutorial in the database
//   entraineMoi
//     .save(entraineMoi)
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while creating the Mouvement."
//       });
//     });
// };

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Entrainement.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving mouvement."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Entrainement.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Entrainement with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Entrainement with id=" + id });
    });
};


exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Entrainement.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Entrainement with id=${id}. Maybe Entrainement was not found!`
        });
      } else res.send({ message: "Entrainement was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Entrainement with id=" + id
      });
    });
};


exports.delete = (req, res) => {
  const id = req.params.id;

  Entrainement.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Entrainement with id=${id}. Maybe Entrainement was not found!`
        });
      } else {
        res.send({
          message: "Entrainement was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Entrainement with id=" + id
      });
    });
};