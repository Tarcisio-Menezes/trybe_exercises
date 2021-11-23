const { MongoClient } = require('mongodb');
require('dotenv').config();

let db = null;

const connection = (dbName, mongoUrl, options) => 
  (db ? Promise.resolve(db) : MongoClient.connect(mongoUrl, options)
    .then((conn) => {
    db = conn.db(dbName);
    return db;
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    }));

module.exports = connection;
