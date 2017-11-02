var express = require('express');
var posts = require('./controllers/posts.ctrl');
var users = require('./controllers/users.ctrl');


var router = express.Router();

router.use('/posts', posts);
router.use('/users', users);

module.exports = router;