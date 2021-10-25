const routes = require('express').Router();
const controllers = require('../controllers/controller');
const middlewaresAuth = require('../middlewares/auth');
const middlewareAdmin = require('../middlewares/admin');

routes.post('/login', controllers.login);
routes.get('/top-secret', middlewaresAuth, middlewareAdmin,  controllers.topSecret)

module.exports = routes;
