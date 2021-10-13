const router = require('express').Router();
const { searchByCep, addCep } = require('../controllers/cepsController');

router.get('/cep/:cep', searchByCep);
router.post('/cep', addCep);

module.exports = router;
