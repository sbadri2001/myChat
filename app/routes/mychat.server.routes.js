'use strict';

/**
 * Module dependencies.
 */
var mychat = require('../../app/controllers/mychat');

module.exports = function(app) {
	// myChat Routes
	
	app.route('/mychat/login')
		.put(mychat.createChat);

	app.route('/mychat/userList').get(mychat.getUserList);

	app.route('/mychat/submitChat:chatMsg').post(mychat.submitChat);

};