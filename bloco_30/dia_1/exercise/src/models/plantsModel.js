const connection = require('./connection');

const plantRegister = async ({ breed, needsSun, origin, size, specialCare }) => {
  try {
    const db = await connection();
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
