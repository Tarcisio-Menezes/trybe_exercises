const { princeConnection } = require('./schemas');

const plantRegister = async (plants) => {
  const { id, breed, needsSun, origin, specialCare, size } = plants;
  try {
    const db = await princeConnection();
    const register = await db.collection('plants').insertOne({
      id, breed, needsSun, origin, specialCare, size,
    });
    return ({
      _id: register.insertedId, breed, needsSun, origin, specialCare, size,
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
