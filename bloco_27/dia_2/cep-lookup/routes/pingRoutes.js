const router = require('express').Router();
const { ping } = require('../controllers/cepsController');

router.get('/ping', ping);

module.exports = router;
