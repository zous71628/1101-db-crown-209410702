var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('crown_02', {
    title: 'Express',
    name: '黃致瑋',
    id: '209410702',
  });
});

module.exports = router;
