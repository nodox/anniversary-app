angular.module('RecordModule', [])
  .controller('RecordController', ['$scope', '$http', 'PostService', function($scope, $http, PostService){

  	// Contains all post from backend
		$scope.posts = PostService.posts;

		$scope.newEntry = {
				title: '',
				body: ''
			};

		$scope.currentPost = true;

		// posts to the backend
		$scope.addNewEntry = function() {
			if ($scope.newEntry.title === '') {
				return;
			};
			if ($scope.newEntry.body === '') {
				return;
			};
			PostService.create({
				title: $scope.newEntry.title,
				body: $scope.newEntry.body
			});	
			$scope.newEntry.title = '';
			$scope.newEntry.body = '';		
		};

		// deletes post from the backend
		$scope.deleteEntry = function(postId) {
			PostService.delete(postId);

		};

		$scope.$on('$viewContentLoaded', function() {

			// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
			$('.modal-trigger').leanModal();
			$(".button-collapse").sideNav();
		});
  }]);