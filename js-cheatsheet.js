//////////////////////////////////////////////////////////////////
// Comment: Common JS Library cheatsheet for quick references
// 
// - 0.0 Initialize JS
// - 1.0 SM & LG desktop sticky navigation
// - 2.0 Swap logo swap with SM & LG desktop with sticky nav
// - 3.0 Carousel Refresher & Mobile BG Swap
// - 4.0 Detect Browser, must include bowser.js in header
// - 5.0 Add tab index to class
//
//////////////////////////////////////////////////////////////////

// 0.0 - HTML load, run JS
$(document).ready(function(){ //insert function });

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

// 3.0 - Bootstrap Carousel Refresher & Mobile BG Swap
var home_page_banner = $('#carousel-example-generic');

$('.panel-heading').click(function(){
	if($(this).hasClass('active')){
		$(this).removeClass('active');
	}else{
		$(this).addClass('active');
	}
	
});

if($('body').hasClass('home')){
	$(window).resize(function(){
		if(home_page_banner.length){
			banner_swap($(window).width());
		}
	});
}

banner_swap(window_width);

function banner_swap(w_width){
	if(w_width <= 991) {
    	$('.slide-1').attr('src', 'images/slider-1-sm.jpg');
    	$('.slide-2').attr('src', 'images/slider-2-sm.jpg');
    	$('.slide-3').attr('src', 'images/slider-3-sm.jpg');
  	} else if(w_width >= 992) {
  		$('.slide-1').attr('src', 'images/slider-1.jpg');
    	$('.slide-2').attr('src', 'images/slider-2.jpg');
    	$('.slide-3').attr('src', 'images/slider-3.jpg');
  	}
}


// 4.0 - Detect Browser, must include bowser.js in header
if (bowser.msie && bowser.version <= 6) {
	alert('Hello China'); // do stuff
} else if (bowser.firefox){
	alert('Hello Foxy'); // do stuff
} else if (bowser.chrome){
	alert('Hello Silicon Valley'); // do stuff
} else if (bowser.safari){
	alert('Hello Apple Fan'); // do stuff
} else if(bowser.iphone || bowser.android){
	alert('Hello mobile'); // do stuff
}

// 5.0 - Add tab index to class
$(".class_name").each(function (i) { 
	$(this).attr('tabindex', i + 1); 
});