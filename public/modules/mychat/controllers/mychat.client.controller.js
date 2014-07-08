'use strict';

angular.module('mychat').controller('ChatController', ['$scope', '$stateParams', '$location', 'MyChatService',
	function($scope, $stateParams, $location, MyChatService) {
		
		// Login to Chat
		$scope.enterChat = function () {
			var chatService = new MyChatService.login({
				name: this.userName,
				login: new Date()
			});
			chatService.$update(function(response) {
				// TODO - Check Duplicate name and generate random user, check room capacity
				$location.path('/mychat/main');
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
			this.loggedInUser = this.userName;
			this.userName = '';
		};

		// Show number of logged in users
		$scope.userCount = Object.keys(MyChatService.userList.query()).length;
		
	}
]);