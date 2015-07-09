angular.module('RememberModule', [])
	.controller('RememberController', function($scope) {
		$scope.greeting = 'working!';

		
		$scope.$on('$viewContentLoaded', function() {
			$('#fullpage').fullpage({ 
				//Scrolling
				css3: true,
				scrollingSpeed: 700,
				fitToSection: true,
				autoScrolling: false,
				scrollBar: true,
				easing: 'easeInOutCubic',
				normalScrollElements: ""
			});

			$(window).unload(function() {
				$.fn.fullpage.destroy();
			});

			// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
			$('.modal-trigger').leanModal();

			$(".button-collapse").sideNav();
		});
});
