// Common JS Library cheatsheet for quick references

// HTML load, run JS
$(document).ready(function(){ //insert function });

// Add tab index to class
$(".class_name").each(function (i) { 
	$(this).attr('tabindex', i + 1); 
});