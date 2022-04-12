var router = require('express').Router();
const passport = require('passport');
const Post = require("../models/post");
const User = require("../models/user");

// The root route renders our only view
router.get('/', function(req, res) {
  res.render('home/index', {title: 'Home'});
});

router.get('/profile', function(req, res) {
  // console.log(req.user._id)
  Post.find({'postedBy._id': req.user._id}, function(err, posts){
    console.log(posts)
  res.render('home/profile', {title: 'Profile', posts});
  })
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/profile', // where do you want the client to go after you login 
    failureRedirect : '/' // where do you want the client to go if login fails
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;
