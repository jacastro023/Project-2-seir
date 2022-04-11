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
  deleteComment
};

function deleteComment(req, res) {
	Post.findOne({'comments._id': req.params.id}, function(err, post){
    console.log(post)
		const comment = post.comments.id(req.params.id);
		// If the comment wasn't made by the user redirect them back to the same page
		// remove the comment
		// 1 way find the comment then call remove method
		comment.remove()

    post.save(function(err){
			if(err) next(err); // next(err) passes it to the express generator err handler
			res.redirect(`/posts/index`)
		})
	})
}

function deletePost(req, res) {
  Post.findByIdAndDelete(req.params.id, function(err, post) {
      res.redirect('/posts/index')
  })
}

function index(req, res) {
  // res.render("posts/index",{title: 'All Posts'})
  Post.find({}, function (err, posts) {
    console.log(posts);
    res.render("posts/index", { title: "All Posts", posts });
  });
}

function newPost(req, res) {
  res.render("posts/new", { title: "Add Post" });
}

function create(req, res) {
  console.log(req.file);
  const post = new Post({
    img: req.file.filename,
    name: req.body.name,
    description: req.body.description
  });
  post.save(function (err) {
    // mongoose talking
    //to mongodb and saying put this object in the movies collection in the database
    // one way to handle errors
    console.log(err, " this err");
    if (err) return res.redirect("/posts/new");
    console.log(post);
    // for now, redirect right back to new.ejs
    res.redirect(`/posts/index`);
  });
}

function show(req, res) {
  Post.findById(req.params.id, function (err, posts) {
    res.render(`posts/show`, { title: "Post Details", posts});
  });
}

function addComment(req, res) {
  Post.findById(req.params.id, function (err, posts) {
    posts.comments.push(req.body);
    posts.save(function (err) {
      res.redirect(`/posts/${req.params.id}`);
    });
  });
}
