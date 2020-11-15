require('colors'); // affichage des coleurs dans la console.
const {say} = require('cowsay'); // affichage de la vache dans la console.
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('------------------------------'.rainbow);
    console.log('-: Mongoose connection open :-');
    console.log('------------------------------'.rainbow);
  })
  .catch(err => {
    console.log('------------------------------'.red);
    console.log('------------------------------'.red);
    console.log('-: Cannot connect to the database! :-', err);
    console.log('------------------------------'.red);
    console.log('------------------------------'.red);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Bienvenue sur WodAmoi. Redirigez-vous sur http://localhost:3000" });
});

//Appel de la route pour la collection wods
require("./app/routes/wod.routes")(app);
//Appel de la route pour la collection mouvements
require("./app/routes/mvt.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(say({ text: 'Running on port 3000'.bgBrightYellow.gray }));
});
