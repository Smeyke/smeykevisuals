//  alert('Hello, World!')


// adding the class .on to the toggle of the mobile menu

$("#cptoggle").click(function() {
  $(this).toggleClass("on");
  $("#cpmenu").slideToggle();
});
