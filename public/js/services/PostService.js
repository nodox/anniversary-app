angular.module('RecordModule').factory('PostService', ['$http', 
	function($http) {

		var PostObj = {
			posts: []
		};

		PostObj.getAll = function() {
			return $http.get('/api/posts').success(function(data) {
				angular.copy(data, PostObj.posts);
			});
		};

		PostObj.create = function(post) {
			return $http.post('/api/posts').success(function(data) {
					PostObj.posts.push(data);
			});
		};



		return PostObj;

}]);