
$(document).ready(function(){
  $(window).scroll(function() {
  	console.log("start");
    if ($(document).scrollTop() > 30) {
      $(".entry-headline").addClass("down");
      $(".down-arrow").addClass("disappear");

    } else {
      $(".entry-headline").removeClass("down");
      $(".down-arrow").removeClass("disappear");

    }
  });
  $( ".nav_button" ).click(function() {
  $(".nav_container").toggleClass ("show_nav") ;
});
});



