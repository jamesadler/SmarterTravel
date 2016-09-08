/*
 * Task 1 
 * Write JavaScript code that fetches the destination name, check in date, and 
 * check out date of the page the user is on and prints them to the console. 
 * You can find these values in the search form near the top of the page. 
*/

// Got the results using jQuery, but also wrote it out in pure JS 

/* To get the destination name:
 *  Used jQuery to find the wrapper div (".field.city") and find the child
 *  input element.
 *  An alternative would be to find the input tag with the name attribute of "city",
 *  and retrieve the first occurrence of it. Note: This is the hidden field,
 *  which only shows up once you start scrolling.
 *  So: console.log($("input[name='city']:first").val());
 *  
 *  Alt. did the same thing but in pure JS, but instead of finding by
 *  name and class, it finds the first element with the matching name attribute.
 *  So: console.log(document.getElementsByName('city')[0].value);
 */
console.log($(".field.city:first > input").val());

/* To get the check in date:
 *  Used jQuery to find the wrapper div (".field check_in") and find the child
 *  input element.
 *  An alternative would be to find the input tag with the class attribute "in_date_field",
 *  and retrieve the first occurrence of it.
 *  So: console.log($("input.in_date_field:first").val());
 *
 *  Alt. did the same thing in pure JS, but instead of finding the wrapper div,
 *  it finds the first element with the matching class attribute. 
 *  So: console.log(document.getElementsByClassName('in_date_field')[0].value);
 */
console.log($(".field.check_in:first > input").val());

/* To get the check out date:
 *  Used jQuery to find the wrapper div (".field check_out") and find the child
 *  input element.
 *  An alternative would be to find the input tag with the class attribute "out_date_field",
 *  and retrieve the first occurrence of it.
 *  So: console.log($("input.out_date_field:first").val());
 *
 *  Alt. did the same thing in pure JS, but instead of finding the wrapper div,
 *  it finds the first element with the matching class attribute. 
 *  So: console.log(document.getElementsByClassName('out_date_field')[0].value);
 */
console.log($(".field.check_out:first > input").val());
