$(document).keydown(function(e){
	console.log(e.which)
	$("body").empty()
	$("body").append(e.which)
 })