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
        location.href = "https://refugee-story.netlify.com/story-form";
    };

    //jquery for adding a class and removing on click for carousel

    $(document).ready(function() {
  $(".carousel").carousel({
    interval: false
  });
  $('#myCarousel').on('slide.bs.carousel', function() {


    $(".myCarousel-target.active").removeClass("active");

    $('#myCarousel').on('slid.bs.carousel', function() {

      var to_slide = $(".carousel-item.active").attr("data-slide-no");

      $(".nav-indicators li[data-slide-to=" + to_slide + "]").addClass("active");

    });
  });

});

    //animating border on hover

const content = document.querySelectorAll("h1");

for ( var i = 0 ; i < content.length ; i++){
  
content[i].addEventListener("mouseover", function(e) {
    const parent = e.target.parentElement;
    if (parent && parent.tagName === "div" && parent.classList.contains("textpos")) {
        const parent = e.target.parentElement;
        parent.children[1].classList.add("border");
    }
});

}

    
const border = document.getElementsByClassName("border");

for ( var i = 0 ; i < border.length ; i++){

border[i].addEventListener("mouseout", function(e) {
    e.target.classList.remove("border");
});

}
