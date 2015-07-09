angular.module('ReconnectModule', [])
    .controller('ReconnectController', ['$scope', '$http', function($scope, $http){
    	
	  	$scope.$on('$viewContentLoaded', function() {

					// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
					$(".button-collapse").sideNav();		
			});
    }]);