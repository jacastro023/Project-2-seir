const User = require('../models/user');
const Post = require('../models/post')

module.exports = {
  new: newPost,
  create,
  index
  // show,
};


function index(req, res) {
      res.render("posts/index",{title: 'All Posts'})
}

function newPost(req, res) {
  res.render("posts/new", { title: "Add Post" });
}

function create(req, res) {
  console.log(req.body);
  const post = new Post(req.body);
  post.save(function (err) { // mongoose talking 
    //to mongodb and saying put this object in the movies collection in the database
    // one way to handle errors
    console.log(err, " this err");
    if (err) return res.redirect("/posts/new");
    console.log(post);
    // for now, redirect right back to new.ejs
    res.redirect(`/posts/index`);
  });
}