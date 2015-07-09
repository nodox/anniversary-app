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

		PostObj.get = function(postId) { // check resolveobject of a single post
			return $http.get('/api/posts/' + postId).then(function(response){
				return response.data;
			});
		};

		PostObj.create = function(post) {
			return $http.post('/api/posts', post).success(function(data) {
					PostObj.posts.push(data);
			});
		};

		PostObj.delete = function(postId){
			return $http.delete('/api/posts/' + postId).success(function(data) {
				PostObj.getAll();
			});
		};

		PostObj.update = function(postId){
			/*return $http.put('/api/posts/' + postId)*/
		};



		return PostObj;

}]);