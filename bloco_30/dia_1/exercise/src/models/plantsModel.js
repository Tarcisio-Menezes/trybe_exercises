const connection = require('./connection');

const { PRINCE_MONGO_DB_URL, PRINCE_DB_NAME } = process.env;

const plantRegister = async ({ breed, needsSun, origin, size, specialCare }) => {
  try {
    const db = await connection(PRINCE_MONGO_DB_URL, PRINCE_DB_NAME);
    const register = await db.collection('plants').insertOne({
      breed, needsSun, origin, size, specialCare,
    });
    return ({
      _id: register.insertedId, breed, needsSun, origin, size, specialCare,
    });
  } catch (err) {
      return ({
        error: 'Error when register plant in the database', code: err,
      });
  }
};

module.exports = {
  plantRegister,
};
