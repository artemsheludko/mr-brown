$(document).ready(function() {

  // Click Top Menu
$(".toggle_menu").click(function() {
	if ($(".top_menu").is(":visible")) {
		$(".top_menu").fadeOut(600);
	} else {
		$(".top_menu").fadeIn(600);
	}
});

$(".top_menu ul a").click(function() {
	$(".top_menu").fadeOut(600);
	$(".sandwich").toggleClass("active");
}).append("<span>");
// Top Menu End

$(".toggle_menu").click(function() {
  $(".sandwich").toggleClass("active");
});

});
