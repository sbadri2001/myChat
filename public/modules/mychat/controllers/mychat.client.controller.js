'use strict';

angular.module('mychat')
.factory('mySocket', function(socketFactory) {
	return socketFactory();
})
.controller('ChatController', ['$scope', '$stateParams', '$location', 'MyChatService', 'mySocket',
	function($scope, $stateParams, $location, MyChatService, mySocket) {
		
		$scope.userCount = 0;
		$scope.chatText = '';
		$scope.chatArea = '';

		$scope.init = function () {

			this.updateUserCount();
		};

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
			this.updateUserCount();
		};

		// Calculate number of logged in users
		$scope.updateUserCount = function () {
			MyChatService.userCount.query({}, angular.noop, function(response){
				console.log(response);
				$scope.userCount = response.status;
			});
		};

		//Submit Chat Message
		$scope.submitChat = function () {
			mySocket.emit('message', { chat : $scope.chatText });
			$scope.chatText = '';
		};

		// Handling Socket Events
	    mySocket.on('broadcast', function(msg){
	        $scope.chatArea = $scope.chatArea  + '-----' + msg.payload.chat;
	    });
	    mySocket.on('user connected', function(){
	        $scope.chatArea = $scope.chatArea  + '----- User Joined';
	    });
	    mySocket.on('login', function(){
	        $scope.chatArea = 'Welcome';
	    });
	    mySocket.on('user disconnect', function(){
	        $scope.chatArea = $scope.chatArea  + '----- User left';
	    });
	}
]);