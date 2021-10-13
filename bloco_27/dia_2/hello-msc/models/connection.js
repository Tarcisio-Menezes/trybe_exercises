const { MongoClient } = require('mongodb');

// não se esqueça de colocar o .env no .gitignore , pois não vamos querer versionar esse arquivo.
// versionado para fins didáticos
require('dotenv').config();

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

const MONGO_DB_URL = process.env.DB_URL;

let db = null;

const connection = () => {
  return db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS)
    .then((conn) => {
      db = conn.db(process.env.DB_NAME);
      return db;
    })
};

module.exports = connection;
