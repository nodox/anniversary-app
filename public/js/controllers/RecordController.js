angular.module('RecordModule', [])
  .controller('RecordController', ['$scope', '$http', 'PostService', function($scope, $http, PostService){
		$scope.test = 'runner';

		$scope.posts = PostService.posts;

		$scope.addNewEntry = function() {
			PostService.create({
				title: $scope.newEntry.title,
				body: $scope.newEntry.body
			});			
			$scope.newEntry = {
				title: '',
				body: ''
			};


		};

		$scope.$on('$viewContentLoaded', function() {

			// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
			$('.modal-trigger').leanModal();
			$(".button-collapse").sideNav();
		});
  }]);