angular.module('RememberModule', [])
	.controller('RememberController', function($scope) {
		$scope.greeting = 'working!';
		$scope.$on('$viewContentLoaded', function() {
			$('#fullpage').fullpage({ 

				//Scrolling
				css3: true,
				scrollingSpeed: 700,
				fitToSection: true,
				autoScrolling: true,
				scrollBar: true,
				easing: 'easeInOutCubic',
				normalScrollElements: ""
			});

			$(window).unload(function() {
				$.fn.fullpage.destroy();
			});
		});
});
