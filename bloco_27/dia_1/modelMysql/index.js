const express = require('express');
const { getAll } = require('./models/Author');

const app = express();

app.get('/authores', async (_req, res) => {
  const authors = await getAll();

  res.status(200).json(authors);
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Online na porta ${PORT}`);
});
