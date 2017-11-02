var express = require('express');
var bootcamps = require('./controllers/bootcamps.ctrl');
var users = require('./controllers/users.ctrl');
var categories = require('./controllers/categories.ctrl');


var router = express.Router();

router.use('/bootcamps', bootcamps);
router.use('/users', users);
router.use('/categories', categories);


module.exports = router;