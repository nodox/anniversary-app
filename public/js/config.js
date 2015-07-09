
var app = angular.module('appRoutes', ['ngRoute']);

app
	.config(function($routeProvider){
		$routeProvider
			.when('/remember', {
				templateUrl : 'views/remember.html',
				controller  : 'RememberController'
			})
			.when('/record', {
				templateUrl : 'views/record.html',
				controller  : 'RecordController',
				
				// using resolve property: when view entered, query all posts from our backend 
				resolve: {
					postPromise: ['PostService', function(PostService) {
						return PostService.getAll();
					}]
				}
			})
			.when('/reconnect', {
				templateUrl : 'views/reconnect.html',
				controller  : 'ReconnectController'
			})
			.otherwise({
				redirectTo  : '/remember'
			});
	});