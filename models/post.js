const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create your Post Model
const postSchema = new mongoose.Schema({
	name: String,
	description: String,
	img: String,
	postedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	comments: [{body:"string", by: mongoose.Schema.Types.ObjectId}]
  }, {
	timestamps: true
  });

module.exports = mongoose.model('Post', postSchema);