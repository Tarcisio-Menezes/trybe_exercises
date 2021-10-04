const express = require('express');
const router = express.Router();

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
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
  res.status(200).json(drinks.sort());
})

router.post('/', validateName, validatePrice, function (req, res) {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price});
  res.status(201).json({ message: 'Recipe created successfully!'});
});

router.get('/search', function (req, res) {
  const { name, maxPrice, minPrice } = req.query;
  const filteredDrinks = drinks.filter((r) => r.name.includes(name) && r.price < parseInt(maxPrice) && r.price >= parseInt(minPrice));
  res.status(200).json(filteredDrinks);
})

router.get('/:id', function (req, res) {
  const { id } = req.params;
  const drink = drinks.find((r) => r.id === parseInt(id));

  if (!drink) return res.status(404).json({ message: 'Drink not found!'});

  res.status(200).json(drink);
});

router.put('/:id', validateName, validatePrice, function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const drinkIndex = drinks.findIndex((r) => r.id === parseInt(id));

  if (drinkIndex === -1) return res.status(404).json({ message: 'drink not found!' });

  drinks[drinkIndex] = { ...drinks[drinkIndex], name, price };

  res.status(204).end();
});

router.delete('/:id', function (req, res) {
  const { id } = req.params;
  const drinkIndex = drinks.findIndex((r) => r.id === parseInt(id));

  if (drinkIndex === -1) return res.status(404).json({ message: 'drink not found!' });

  drinks.splice(drinkIndex, 1);

  res.status(204).end();
});

module.exports = router;
