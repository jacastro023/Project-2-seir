const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require("../models/user");

const commentSchema = new Schema({
	content: {type: String, required: true},
	commentUser: "",
	userName: "" 
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
	likes:[
		{
		   type: Schema.Types.ObjectId,
		   ref: 'User'
		}
	 ],
	 unlikes:[
		{
		   type: Schema.Types.ObjectId,
		   ref: 'User'
		}
	 ]

  }, {
	timestamps: true
  });

module.exports = mongoose.model('Post', postSchema);