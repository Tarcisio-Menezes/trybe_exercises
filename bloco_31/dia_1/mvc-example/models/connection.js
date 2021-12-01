const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'tarcisio',
  password: 'delphi77',
  database: 'mvc_example'});

module.exports = connection;
