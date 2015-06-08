
var app = angular.module('anniversaryApp', ['ngRoute']);

app
	.config(function($routeProvider){
		$routeProvider
			.when('/remember', {
				templateUrl : 'views/remember.html',
				controller  : ''
			})
			.when('/record', {
				templateUrl : 'views/record.html',
				controller  : ''
			})
			.when('/reconnect', {
				templateUrl : 'views/reconnect.html',
				controller  : ''
			})
			.otherwise({
				redirectTo  : '/remember'
			});
	});