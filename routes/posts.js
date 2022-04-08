const express = require('express');
const router = express.Router();
const postsCtrl = require('../controllers/posts');
const isLoggedIn = require('../config/auth')
// all of these start with /posts, because of this code in our server
// app.use('/posts', postsRouter);

// THis matches the URL
//posts/index
router.get('/index', isLoggedIn, postsCtrl.index);

// GET /posts/new
router.get('/new', isLoggedIn, postsCtrl.new);
// //posts/all
// router.get('/id', isLoggedIn, postsCtrl.show);
// // POST /posts
router.post('/', isLoggedIn, postsCtrl.create);



module.exports = router;