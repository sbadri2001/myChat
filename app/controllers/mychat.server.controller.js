'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	MyChatUser = mongoose.model('MyChatUser'),
	MyChat = mongoose.model('MyChat'),
	_ = require('lodash');

/**
 * Get the error message from error object
 */
var getErrorMessage = function(err) {
	var message = '';

	if (err.code) {
		switch (err.code) {
			case 11000:
			case 11001:
				message = 'Data already exists';
				break;
			default:
				message = 'Something went wrong';
		}
	} else {
		for (var errName in err.errors) {
			if (err.errors[errName].message) message = err.errors[errName].message;
		}
	}

	return message;
};

/**
 * Module dependencies.
 */
exports.index = function(req, res) {
	res.render('index');
};

/**
 * Login to Chat
 */
exports.createChat = function(req, res) {
	var myChatUser = new MyChatUser(req.body);

	myChatUser.save(function(err) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(myChatUser);
		}
	});
};


exports.getUserCount = function(req, res) {

	MyChatUser.find({}, function (err, users) {
         res.send(users.length);  
    });
};

exports.submitChat = function(req, res) {
	
};