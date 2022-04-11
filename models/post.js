const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
	content: {type: String, required: true},
	user: {type: Schema.Types.ObjectId, ref: 'User'} // referencing the user document
  }, {
	timestamps: true
  });
// Create your Post Model
const postSchema = new mongoose.Schema({
	name: String,
	description: String,
	img: String,
	postedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	comments: [commentSchema],
  }, {
	timestamps: true
  });

module.exports = mongoose.model('Post', postSchema);