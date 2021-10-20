var express = require('express');
var router = express.Router();
const apiCrown2Controller_02 = require('../controllers/apiCrown2Controller_02');

/* GET home page. */
router.get('/category_02',apiCrown2Controller_02.getCategories);

module.exports = router;
