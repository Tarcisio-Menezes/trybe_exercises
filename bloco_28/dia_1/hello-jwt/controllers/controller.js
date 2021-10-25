const services = require('../services/services');

const login = (req, res, next) => {
  const { username, password } = req.body;
  const token = services.generatorTokenAdmin(username, password);
  if (token.error) return next(token.error);
  return res.status(201).json({ 
    token
  });
 };

const topSecret = (_req, res, _next) => {
  return res.status(200).json({
    topSecretInfo: 'Tarcísio Menezes é fera em NodeJS',
  });
}

module.exports = {
  login,
  topSecret,
};
