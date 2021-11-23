module.exports = (err, _req, res, _next) => {
  console.log(err);
  if (err.isJoi) {
    return res.status(400).json({ message: err.message });
  } return res.status(500).json({ message: 'fatal error' });
};
