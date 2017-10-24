//////////////////////////////////////////////////////////////////
// Comment: Common JS Library cheatsheet for quick references
// 
// - 0.0 Initialize JS
// - 1.0 SM & LG desktop sticky navigation
// - 2.0 Swap logo swap with SM & LG desktop with sticky nav
//
//////////////////////////////////////////////////////////////////

// 0.0 - HTML load, run JS
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
// 1.1 - Sticky site header expand and collapse
$('.site-header-button').click(function(){
	if($('#site-header').hasClass('expanded')){
		$('#site-header').removeClass('expanded');
	}else{
		$('#site-header').addClass('expanded');
	}
	
});

// 2.0 - Swap logo swap with SM & LG desktop with sticky nav
var body = $('body');
var logo = $('.logo');
if(body.hasClass('public')){
	logo.attr('src', '/images/logo.png');
	$(window).scroll(function() {
		var window_top_scroll = $(window).scrollTop();
		if(window_width > 750){ //Add class if screen > 750px
			if(window_top_scroll > 100){
				$('.navbar').addClass('sticky-nav');
				$('.logo').attr('src', '/images/logo-2.png');
			}
			else{
				$('.navbar').removeClass('sticky-nav');
				$('.logo').attr('src', '/images/logo.png');
			}
		}else{ //Ignore if screen > 750px	
			if(window_top_scroll < 100){
				$('.navbar').removeClass('sticky-nav');
			}
			else{
				$('.navbar').removeClass('sticky-nav');
			}
		}
	});
}