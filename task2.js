/*
 * Task 2 
 * At the top of the page there is a tagline that contains something similar to 
 * "Searching 384 San Francisco Hotels". Modify this string to say 
 * "Showing XX out of 384 San Francisco Hotels" where XX is the number of hotels 
 * currently listed on the page. Note that this page uses 'infinite scrolling',
 * so as you scroll down more hotels are loaded in via AJAX. The number of hotels 
 * in the tagline should be updated to reflect this as the user scrolls. 
 */

$(window).scroll(function(event){
	var hotelCount = $("#hotel_listings li.tabsParent").length;
	$(".listing_summary > h3").html(headline.replace('Searching', 'Showing '+hotelCount+' out of'));
});

$(document).ready(function(){
	var headline = $(".listing_summary > h3").html();
	var hotelCount = $("#hotel_listings li.tabsParent").length;

	// sets up the inital summary headline
	$(".listing_summary > h3").html(headline.replace('Searching', 'Showing '+hotelCount+' out of'));

});
