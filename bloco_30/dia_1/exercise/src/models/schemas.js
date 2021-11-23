const connection = require('./connectionFactory');

const { MONGO_DB_URL, DB_NAME } = process.env.MONGO_DB_URL;

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const princeConnection = connection(DB_NAME, MONGO_DB_URL, OPTIONS);

module.exports = {
  princeConnection,
};
