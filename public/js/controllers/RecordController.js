angular.module('RecordModule', [])
  .controller('RecordController', ['$scope', '$http', function($scope, $http){
		$scope.test = 'runner';

			$scope.$on('$viewContentLoaded', function() {

				// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
				$('.modal-trigger').leanModal();
				$(".button-collapse").sideNav();
		});
  }]);