const mysql = require('mysql2/promise');

// não se esqueça de colocar o .env no .gitignore , pois não vamos querer versionar esse arquivo.
// versionado para fins didáticos
require('dotenv').config();

const HOST = process.env.HOST;
const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;
const DATABASE = process.env.DB_NAME

const connection = mysql.createPool({
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DATABASE,
});

module.exports = connection;
