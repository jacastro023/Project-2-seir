const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require("../models/user");

const commentSchema = new Schema({
	content: {type: String, required: true},
	user:  [
		{
		   type: mongoose.Schema.Types.ObjectId,
		   ref: 'User'
		}
	 ],
	 userName: "" // referencing the user document
  }, {
	timestamps: true
  });
// Create your Post Model
const postSchema = new mongoose.Schema({
	name: String,
	description: String,
	img: String,
	postedBy: [
		{
		   type: mongoose.Schema.Types.ObjectId,
		   ref: 'User'
		}
	 ],
	comments: [commentSchema],

  }, {
	timestamps: true
  });

module.exports = mongoose.model('Post', postSchema);