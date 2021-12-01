const Cats = require("../models/catModel");

const listCats = async (req, res) => {
  const cats = await Cats.getAll();

  if (!cats) {
    return res
      .status(400)
      .render("catList", { message: "Gatos não encontrados" });
  }

  res.render("catList", {
    cats,
    message: "",
  });
};

const newCat = async (req, res) => {
  const { name, age } = req.body;

  if (!Cats.isValid(name, age)) {
    const cats = await Cats.getAll();
    return res.status(400).render("catList", {
      cats,
      message: "O nome ou idade digitados não são válidos",
    });
  }

  await Cats.add(name, age);

  res.render("success");
};

module.exports = {
  listCats,
  newCat,
};
