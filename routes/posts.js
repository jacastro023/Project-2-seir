const express = require('express');
const router = express.Router();
const postsCtrl = require('../controllers/posts');
const isLoggedIn = require('../config/auth');
const multer = require('multer')


const storage = multer.diskStorage({
    destination:function(request, file, cb){
        cb(null, './public/uploads/images'); // this is where images are going to be stored
    },

    filename:function(request, file, cb){
        cb(null, Date.now() + file.originalname) // this helps give files original names
    }
});

// with this upload you can  use the storage abive and limit the file size
const upload = multer({
    storage: storage,
    limits:{
        fileSize: 1024*10124*3,
    }
})

// all of these start with /posts, because of this code in our server
//posts/index
router.get('/index', isLoggedIn, postsCtrl.index);

// GET /posts/new
router.get('/new', isLoggedIn, postsCtrl.new);
// GET /posts/:id
router.get('/:id', postsCtrl.show);
// POST /posts/
router.post('/', upload.single('img'), isLoggedIn, postsCtrl.create);
// POST /posts/:id/comments
router.post('/:id/comments', isLoggedIn, postsCtrl.addComment)
// DELETE /posts/:id
router.delete('/:id', isLoggedIn, postsCtrl.delete)
// DELETE /posts/comments/:id
router.delete('/comments/:id', isLoggedIn, postsCtrl.deleteComment)
// GET /posts/:id/edit
router.get('/:id/edit', isLoggedIn, postsCtrl.editPost)
// PUT /posts/:id
router.put('/:id', isLoggedIn, postsCtrl.updatePost)
// PUT /posts/likes/:id
router.put('/likes/:id', isLoggedIn, postsCtrl.updateLikes)
// PUT /posts/unlikes/:id
router.put('/unlikes/:id', isLoggedIn, postsCtrl.updateUnlikes)
// PUT /posts/like/:id
router.put('/like/:id', isLoggedIn, postsCtrl.updateLike)
// PUT /posts/unlike/:id
router.put('/unlike/:id', isLoggedIn, postsCtrl.updateUnlike)

module.exports = router;