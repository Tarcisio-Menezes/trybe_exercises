const express = require('express');
const bodyParser = require('body-parser');

const Author = require('./controllers/Author');
const errorMiddleware = require('./middlewares/error');

// não se esqueça de colocar o .env no .gitignore , pois não vamos querer versionar esse arquivo.
// versionado para fins didáticos
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

app.get('/authors', Author.getAll);
app.get('/authors/:id', Author.findById);
app.post('/authors', Author.create);
app.use(errorMiddleware);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
