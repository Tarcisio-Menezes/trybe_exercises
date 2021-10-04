const express = require('express');
const router = express.Router();

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

function validateName(req, res, next) {
  const { name } = req.body;
  if (!name || name === '') return res.status(400).json({ message: 'Invalid data!'});

  next(); 
};

function validatePrice(req, res, next) {
  const { price } = req.body;
  if (!price || parseInt(price) <= 0) return res.status(400).json({ message: 'Invalid data!' });

  next();
};

router.get('/', function (req, res) {
  res.status(200).json(recipes);
});

router.post('/', validateName, validatePrice, function (req, res) {
  const { id, name, price, waitTime } = req.body;
  const { username } = req.user;
  recipes.push({ id, name, price, waitTime, chef: username});
  res.status(201).json({ message: 'Recipe created successfully!'});
});

// router.get('/recipes/search', function (req, res) {
//   const { name } = req.query;
//   const filteredRecipes = recipes.filter((r) => r.name.includes(name));
//   res.status(200).json(filteredRecipes);
// });

router.get('/search', function (req, res) {
  const { name, maxPrice, minPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price < parseInt(maxPrice) && r.price >= parseInt(minPrice));
  res.status(200).json(filteredRecipes);
})

router.get('/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

router.put('/:id', validateName, validatePrice, function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
});

router.delete('/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

module.exports = router;
