const express = require("express");
const bodyParser = require("body-parser");
const catController = require("./controllers/catController");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "./views");

// Listar gatos
app.get("/cats", catController.listCats);

/* Cria um novo gato */
app.post("/cats", catController.newCat);

app.listen(3001, () => {
  console.log("Ouvindo a porta 3001!");
});
