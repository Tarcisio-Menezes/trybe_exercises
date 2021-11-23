const { MongoClient } = require('mongodb');
require('dotenv').config();

const { PRINCE_MONGO_DB_URL, PRINCE_DB_NAME } = process.env;

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let db = null;

const connection = () => 
  (db ? Promise.resolve(db) : MongoClient.connect(PRINCE_MONGO_DB_URL, OPTIONS)
    .then((conn) => {
    db = conn.db(PRINCE_DB_NAME);
    return db;
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    }));

module.exports = connection;
