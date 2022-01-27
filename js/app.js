$(document).foundation();

$( document ).ready(function() {
   
   	var width = $('#routesection').width();
    var routeheight = width * 1.04;  
    $("#routesection").height(routeheight);
   
   	$(".waypointcontent").hide();
   
   	$("a#eventlink").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#introsection").offset().top
	    }, 1000);
	});
	$("a#routelink").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#routeteaser").offset().top
	    }, 1000);
	});
	$("a#signuplink").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#signupsection").offset().top
	    }, 1000);
	});
	$("a#partnerlink").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#partnersection").offset().top
	    }, 1000);
	});
   
    /*
   	$("a#mujejarvispot").click(function(e){
	   	$("#mujejarvi").fadeIn();
	   	
	   	// Cancel the default action
	   	e.preventDefault();
	});
	
	$("a#uuronrotkospot").click(function(e){
	   	$("#uuronrotko").fadeIn();
	   	
	   	// Cancel the default action
	   	e.preventDefault();
	});
	
	$("a.close").click(function(e){
	   	$(".waypointcontent").fadeOut();
	   	
	   	// Cancel the default action
	   	e.preventDefault();
	});
	
	$("a.prev").click(function(e){
	   	// Cancel the default action
	   	e.preventDefault();
	});
	
	$("a.next").click(function(e){
	   	// Cancel the default action
	   	e.preventDefault();
	});
	*/
	   
	$(window).resize(function() {
        //var bodywidth = $(document).width();
        var width = $('#routesection').width();
        var routeheight = width * 1.04;  
        $("#routesection").height(routeheight);
        //alert(bodywidth);
    });
	
	
	$("a.hotspot").hover(
		function() {
			$('.spotcontent', this).show();
		}, function() {
			$('.spotcontent', this).hide();
		}	
	);
	
});


$(function(){
      //$(".player").YTPlayer();
      $("#P1").YTPlayer();
});
