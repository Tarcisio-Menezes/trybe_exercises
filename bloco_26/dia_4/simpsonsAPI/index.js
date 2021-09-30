const express = require('express');
const fs = require('fs').promises;

const app = express();

app.use(express.json());

const simpsons = require('./simpsons.json');

app.get('/simpsons', (req, res) => {
  res.status(200, 'OK').json(simpsons);
});

app.get('/simpsons/:id', (req, res) => {
  const { id } = req.params;
  const simpson = simpsons.find((item) => parseInt(item.id) === parseInt(id));
  if (!simpson) return res.status(404, 'Not Found').json({ 
    message: 'Não encontrei este personagem!'
   });
  res.status(200, 'OK').json(simpson);
});

app.post('/simpsons', (req, res) => {
  const { id, name } = req.body;
  if (simpsons.find((item) => parseInt(item.id) === parseInt(id))) {
    return res.status(409, 'Conflict my brother').json({ message: 'Já existe um personagem com este id' });
  } else {
    simpsons.push({ id, name });
    // res.status(201).json({ message: 'Created successfully!' });
    res.status(204).end();
  };
})



app.listen(3001, () => console.log('Estou de olho na porta 3001'));
