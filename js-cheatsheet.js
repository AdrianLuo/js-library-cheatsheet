// Common JS Library cheatsheet for quick references

// HTML load, run JS
$(document).ready(function(){ //insert function });

// Add tab index to class
$(".class_name").each(function (i) { 
	$(this).attr('tabindex', i + 1); 
});

// 1.0 - SM & LG desktop sticky navigation
var window_width = $(window).width();
$(window).scroll(function() {

	var window_top_scroll = $(window).scrollTop();
	
	if(window_width > 768){ 
		if(window_top_scroll > 100){
			$('#site-header').addClass('sticky-nav');
		} else { 
			$('#site-header').removeClass('sticky-nav');
		}	
	}
	
});