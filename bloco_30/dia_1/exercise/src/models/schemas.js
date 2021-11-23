const connection = require('./connectionFactory');
require('dotenv');

const { PRINCE_MONGO_DB_URL, PRINCE_DB_NAME } = process.env;

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const princeConnection = connection(PRINCE_DB_NAME, PRINCE_MONGO_DB_URL, OPTIONS);

module.exports = {
  princeConnection,
};
