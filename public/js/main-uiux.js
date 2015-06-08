$(document).ready(function() {
	$('#fullpage').fullpage({ 
/*0
down vote
I just moved that init statement into controller from that page [ to correct ajax problem]
*/
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