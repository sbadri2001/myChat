'use strict';

// Setting up route
angular.module('mychat').config(['$stateProvider',
	function($stateProvider) {
		// Articles state routing
		$stateProvider.
		state('login', {
			url: '/mychat',
			templateUrl: 'modules/mychat/views/login-myChat.client.view.html'
		}).
		state('main', {
			url: '/mychat/main',
			templateUrl: 'modules/mychat/views/main-myChat.client.view.html'
		});
	}
]);