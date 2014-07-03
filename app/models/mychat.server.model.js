'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Article Schema
 */
var MyChatSchema = new Schema({
	datemodified: {
		type: Date,
		default: Date.now
	},
	message: {
		type: String,
		default: '',
		trim: true
	},
	user: {
		type: Schema.ObjectId,
		ref: 'MyChatUser'
	}
});

mongoose.model('MyChat', MyChatSchema);