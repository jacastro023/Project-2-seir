const express = require('express');
const router = express.Router();
const postsCtrl = require('../controllers/posts');
const isLoggedIn = require('../config/auth');
const multer = require('multer')
// all of these start with /posts, because of this code in our server
// app.use('/posts', postsRouter);
const storage = multer.diskStorage({
    destination:function(request, file, cb){
        cb(null, './public/uploads/images');
    },

    filename:function(request, file, cb){
        cb(null, Date.now() + file.originalname)
    }
});

const upload = multer({
    storage: storage,
    limits:{
        fileSize: 1024*10124*3,
    }
})
// THis matches the URL
//posts/index
router.get('/index', isLoggedIn, postsCtrl.index);

// GET /posts/new
router.get('/new', isLoggedIn, postsCtrl.new);

router.get('/:id', postsCtrl.show);
// // POST /posts
router.post('/', upload.single('img'), isLoggedIn, postsCtrl.create);

router.post('/:id/comments', isLoggedIn, postsCtrl.addComment)

router.delete('/:id', isLoggedIn, postsCtrl.delete)

router.delete('/comments/:id', isLoggedIn, postsCtrl.deleteComment)

router.get('/:id/edit', isLoggedIn, postsCtrl.editPost)

router.put('/:id', isLoggedIn, postsCtrl.updatePost)

router.put('/likes/:id', isLoggedIn, postsCtrl.updateLikes)

router.put('/unlikes/:id', isLoggedIn, postsCtrl.updateUnlikes)

router.put('/like/:id', isLoggedIn, postsCtrl.updateLike)

router.put('/unlike/:id', isLoggedIn, postsCtrl.updateUnlike)

module.exports = router;