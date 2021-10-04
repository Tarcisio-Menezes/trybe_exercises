const express = require('express');
const authMiddleware = require('./auth-middleware');

const app = express();
app.use(express.json());

// Esta rota não passa pelo middleware de autenticação!
app.get('/open', function (req, res) {
  res.send('open!')
});

app.use(authMiddleware);

const recipesRouter = require('./recipesRouter');

const drinksRouter = require('./drinksRouter')

app.use('/recipes', recipesRouter);

app.use('/rdrinks', drinksRouter);

app.get('/validateToken', function (req, res) {
  const token = req.headers.authorization;
  if (token.length !== 16) return res.status(401).json({message: 'Invalid Token!'});

  res.status(200).json({message: 'Valid Token!'})
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
