const router = require('express').Router();
const controller = require('../controllers/plantsController');

router.post('/plants', controller.plantRegister);

module.exports = router;
