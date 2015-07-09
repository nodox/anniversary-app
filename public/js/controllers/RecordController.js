angular.module('RecordModule', [])
  .controller('RecordController', ['$scope', '$http', 'PostService', function($scope, $http, PostService){
		$scope.test = 'runner';

		$scope.posts = PostService.posts;
		$scope.newEntry = {
				title: '',
				body: ''
			};


		$scope.addNewEntry = function() {
			PostService.create({
				title: $scope.newEntry.title,
				body: $scope.newEntry.body
			});			
		};

		$scope.deleteEntry = function(postId) {
			PostService.delete(postId);
		};

		$scope.$on('$viewContentLoaded', function() {

			// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
			$('.modal-trigger').leanModal();
			$(".button-collapse").sideNav();
		});
  }]);