const User = require("../models/user");
const Post = require("../models/post");
const { request } = require("../server");

module.exports = {
  new: newPost,
  create,
  index,
  show,
  addComment,
  delete: deletePost,
  deleteComment,
  editPost,
  updatePost,
  updateLikes,
  updateUnlikes,
  updateLike,
  updateUnlike
};

// function to update likes on details page
function updateLike(req, res){
  Post.findById(req.params.id, function(err, post){
    if(post.likes.includes(req.user._id)){ // check if the user has already liked the post
      post.likes.pull(req.user._id) //if user has liked, then remove from the likes
    } else {
      post.likes.push(req.user._id) // if user not found then add to liked array
    }
    post.save(function(err) {
      res.redirect(`/posts/${req.params.id}`); // redirect to the details page of the post
    });
  });
}

// function to update unlikes from details page
function updateUnlike(req, res){
Post.findById(req.params.id, function(err, post){
  if(post.unlikes.includes(req.user._id)){ // check if the user has already unliked the post
    post.unlikes.pull(req.user._id) //if user has unliked, then remove from the likes
  } else {
    post.unlikes.push(req.user._id) // if user not found then add to unliked array
  }
  post.save(function(err) {
    res.redirect(`/posts/${req.params.id}`); // redirect to the details page of the post
  });
});
}

// function to update unlikes from all posts page
function updateLikes(req, res){

    Post.findById(req.params.id, function(err, post){
      if(post.likes.includes(req.user._id)){ // check if the user has already liked the post
        post.likes.pull(req.user._id) //if user has liked, then remove from the likes
      } else {
        post.likes.push(req.user._id) // if user not found then add to liked array
      }
      post.save(function(err) {
        res.redirect(`/posts/index`); // redirect to the all posts page of the post
      });
    });
}

// function to update unlikes from all posts page
function updateUnlikes(req, res){
  Post.findById(req.params.id, function(err, post){
    if(post.unlikes.includes(req.user._id)){ // check if the user has already unliked the post
      post.unlikes.pull(req.user._id) //if user has unliked, then remove from the likes
    } else {
      post.unlikes.push(req.user._id) // if user not found then add to unliked array
    }
    post.save(function(err) {
      res.redirect(`/posts/index`); // redirect to the all posts page of the post
    });
  });
}

function updatePost(req, res){

    Post.findById(req.params.id, function(err, post){
      // when updating only able to update the name and description of the post
      post.name = req.body.name,
      post.description = req.body.description
      post.save(function(err) {
        res.redirect(`/profile`); // after updating redirect to profile page
      });
    });
}

function editPost(req, res){
  Post.findById(req.params.id, function (err, posts) {
    res.render(`posts/edit`, { title: "Post Details", posts}); // when you want to edit a post render the edit page
  });
}

function deleteComment(req, res) {
	Post.findOne({'comments._id': req.params.id}, function(err, post){ //find the post containing the comment you want
		const comment = post.comments.id(req.params.id);
		comment.remove() // remmove the comment
    post.save(function(err){
			if(err) next(err); // next(err) passes it to the express generator err handler
			res.redirect(`/posts/index`) // redirect to all posts page
		})
	})
}

function deletePost(req, res) {
  Post.findByIdAndDelete(req.params.id, function(err, post) { // use build in function to delete the post
      res.redirect('/posts/index') // redirect to all posts page
  })
}

function index(req, res) {
  Post.find({}, function (err, posts) {
    res.render("posts/index", { title: "All Posts", posts }); // find all posts and render on all posts page
  });
}

function newPost(req, res) {
  res.render("posts/new", { title: "Add Post" }); // when wanting to add new post render the new posts page
}

function create(req, res) {
  const post = new Post({ //when creating a new post, define all keys from values from the req.body
    img: req.file.filename,
    name: req.body.name,
    description: req.body.description,
    postedBy: req.user._id
  });
  post.save(function (err) { // after changed make sure to save the post
    if (err) return res.redirect("/posts/new");
  
    res.redirect(`/posts/index`); // redirect right back to all posts
  });
}

function show(req, res) {
  Post.findById(req.params.id, function (err, posts) {
    res.render(`posts/show`, { title: "Post Details", posts}); // when clicking on certain posts, show the details page
  });
}

function addComment(req, res) {
  Post.findById(req.params.id, function (err, posts) {
    posts.comments.push({ // push the contents of req.body to the comments array
      content: req.body.content,
      userName: req.user.name,
      commentUser: req.user._id
    });
    posts.save(function (err) { // after changes, save the post
      res.redirect(`/posts/${req.params.id}`); // redirect to given post
    });
  });
}
