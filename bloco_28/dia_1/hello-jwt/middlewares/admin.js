module.exports = (req, res, next) => {
  const username = req.user;
  const { admin } = username;
  if (admin !== true) {
    return res.status(401).json({
      error: { message: 'Acesso restrito' }
    });
  };
  next();
};
