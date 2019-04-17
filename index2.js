function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}


var onScroll = debounce(function(direction) {
  //console.log(direction);
  if (direction == false) {
  	$('.carousel-control-next').click();
  } else {
  	$('.carousel-control-prev').click();
  }
}, 100, true);


//nav

(function($) {
  "use strict"; // Start of use strict

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 100
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict


document.querySelector(".buttonDude").onclick = function () {
        location.href = "http://www.google.com";
    };

    $(document).ready(function() {
  $(".carousel").carousel({
    interval: 5000
  });
  $('#myCarousel').on('slide.bs.carousel', function() {


    $(".myCarousel-target.active").removeClass("active");

    $('#myCarousel').on('slid.bs.carousel', function() {

      var to_slide = $(".carousel-item.active").attr("data-slide-no");

      $(".nav-indicators li[data-slide-to=" + to_slide + "]").addClass("active");

    });
  });

});