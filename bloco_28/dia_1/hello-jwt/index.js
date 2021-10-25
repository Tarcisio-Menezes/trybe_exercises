const express = require('express');
const loginRoutes = require('./routes/routes');
const errorMiddleware = require('./middlewares/error');

const app = express();
app.use(express.json());

const PORT = 3030;

app.use(loginRoutes);
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log('Ouvindo a porta 3030');
});
