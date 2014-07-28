'use strict';

//MyChat service used for communicating with the articles REST endpoints
angular.module('mychat').factory('MyChatService', ['$resource',
	function($resource) {
		return {
			login: 
				$resource('/mychat/login:id', {
					id: '@_id'
				}, {
					update: {
						method: 'PUT'
					}
				}),
			userCount:
				$resource('/mychat/userCount'),
			submitChat:
				$resource('/mychat/submitChat:chatMsg', {}, { submit: {method: 'POST'}})
		};
	}
]);