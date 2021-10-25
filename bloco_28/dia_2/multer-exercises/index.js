const express = require('express');
const multer = require('multer');
const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(express.static(`${__dirname}/uploads`));

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads');
  },
  filename: (req, file, callback) => {
    callback(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

app.use(express.json());

app.get('/ping', controllers.ping);
app.post('/upload', upload.single('file'), (req, res) =>
  res.status(200).json({ file: req.file }));

app.use(middlewares.error);

app.listen(5000, () => {
  console.log('App listening on port 5000');
});

// como o multer é um middleware, o correto é ficar em routes, está em index para fins
// de aprendizagem
