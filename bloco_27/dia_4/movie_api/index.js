const express = require('express');
const bodyParser = require('body-parser');

const MovieController = require('./controllers/movieController');

const app = express();

app.use(bodyParser.json());

app.post('/movies', MovieController.create);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});

// Lembre-se que em nossos testes, isolamos a conexão com o MongoDB usando um server em memória, 
// por isso não foi necessário configurarmos um server MongoDB anteriormente.
//  Para rodarmos nossa aplicação, precisamos subir o serviço do MongoDB padrão.
