const express = require('express');

const app = express();
app.use(express.json());

app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong' })
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(201).json({ message: `Hello my friend ${name}` });
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  const minAge = 17
  age > minAge ? res.status(200, 'OK').json({ message: `Hello my friend ${name}` })
    : res.status(401).json({ message: 'Unauthorized, sorry' })
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.status(200).json({ message: `User name: ${name} - age: ${age}` })
});

app.listen(3001, () => {
  console.log('Estou ouvindo a porta 3001')
});
