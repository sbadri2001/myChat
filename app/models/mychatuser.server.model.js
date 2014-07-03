'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Article Schema
 */
var MyChatUserSchema = new Schema({
	login: {
		type: Date,
		default: Date.now
	},
	name: {
		type: String,
		default: '',
		trim: true,
		required: 'Name cannot be blank'
	},
	lastactive: {
		type: Date,
		default: Date.now
	}
});

mongoose.model('MyChatUser', MyChatUserSchema);