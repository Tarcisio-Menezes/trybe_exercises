const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers['authorization'];
  const secret = 'delphi77';
  try {
    const decoded = jwt.verify(token, secret);
    if (!token) {
      return res.status(404).json({
        error: 'invalidData',
        message: 'token inválido'
      })
    }
    req.user = {
      user: decoded.data.user,
      admin: decoded.data.admin,
    };
    next();
  } catch(err) {
      return res.status(401).json({
        error : { err, message: 'erro com a biblioteca' },
      });
  };
};
