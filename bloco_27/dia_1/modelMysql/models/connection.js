const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'tarcisio',
  password: 'delphi77',
  database: 'model_example'
});

module.exports = connection;
