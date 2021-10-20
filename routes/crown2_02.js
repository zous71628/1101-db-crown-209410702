var express = require('express');
var router = express.Router();
const crown2Controller_02 = require('../controllers/crown2Controller_02');

/* GET home page. */
router.get('/', crown2Controller_02.getCategories);

module.exports = router;
