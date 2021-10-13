const express = require('express');
const pingRoutes = require('./routes/pingRoutes');
const cepRoutes = require('./routes/cepRoutes');
const errorMiddleware = require('./middlewares/error');

// não se esqueça de colocar o .env no .gitignore , pois não vamos querer versionar esse arquivo.
// versionado para fins didáticos
require('dotenv').config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.use(pingRoutes);
app.use(cepRoutes);
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
