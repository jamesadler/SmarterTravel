/* 
 * Task 3 
 * Each hotel in the listing has a 'Select' button that when clicked takes the 
 * user to a detail page about that specific hotel. Write JavaScript code that 
 * changes the functionality of this button to instead do 2 things 
 * 1) Opens the hotel’s detail page in a new browser window instead of reusing 
 *    the same one as it currently does 
 * 2) Add the name of the hotel chosen to a new list somewhere on the hotel 
 *    listing page that says “Selected hotels”. You can choose where this list 
 *    is displayed and how it is styled, but it must be visible on the hotel 
 *    listings page. Note that If the user chooses the same hotel twice, the 
 *    name should not be duplicated in the list of 'Selected hotels'. 
 */
$(document).ready(function(){
	$("a.prominent_button.do_show_rates").each(function(){
		$(this).attr('target','_blank');
	});

	$("#curated_geo").after('<div class="module" id="selectedHotels"></div>');
	$("#selectedHotels").append('<div class="container_title">Selected Hotels</div>');
	$("#selectedHotels > .container_title").css({
		'padding' : '5px 14px',
		'font-weight' : 'bold',
		'font-size' : '16px'
	});
	$("#selectedHotels").append('<div class="row" id="hotelNames"></div>');
	$("#hotelNames").append('<div class="content"><ol id="selectedHotelsList"></ol></div>');

	$("a.prominent_button.do_show_rates").click(function(){
		var hotelName = $(this).closest(":has( .hotel_detail_link)").find(".hotel_detail_link").html();

		if($("#selectedHotelsList :contains('"+hotelName+"')").length == 0){
			$("#selectedHotelsList").append("<li>"+hotelName+"</li>");
		}
	});
});
