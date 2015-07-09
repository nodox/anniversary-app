
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
				controller  : 'RecordController'
			})
			.when('/reconnect', {
				templateUrl : 'views/reconnect.html',
				controller  : 'ReconnectController'
			})
			.otherwise({
				redirectTo  : '/remember'
			});
	});