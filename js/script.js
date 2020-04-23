$(document).ready(function(){
 /* $('#slider').slick({
  	adaptiveHeight: true,
  	autoplay: true,
  	autoplaySpeed: 5000,
  	dots: true
  });*/
   $('.slider-for').slick({
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    prevArrow: '<button type="button" class="slick-prev"><</button>',
    nextArrow: '<button type="button" class="slick-next">></button>',
  });
  $('.slider-nav').slick({
    asNavFor: '.slider-for',
    dots: true,
    arrows: false,
  });
});



/*nav bar fade in
--------------------------------------------*/
/*$(document).scroll(function (e) {
  var viewportHeight = $(window).height();
  var positionFromTop = $('body').scrollTop();

  if (positionFromTop / viewportHeight > 1.00) {
    $('.top_bar').fadeIn();
  } else {
    $('.top_bar').fadeOut();
  }
});

/*smooth scroll
--------------------------------------------*/


/*smooth Scroll 2

var navHeight = $('.top_bar').outerHeight()*2;
var contentAreas = {};

$('.content').each(function () {
  var area = $(this).data('area');
  contentAreas[area] = $('.content-' + area).offset().top
});

$('.navigation li').click(function () {
  var contentArea = $(this).data('navigation-item');
  $('body').animate({
    scrollTop: $('.content-' + contentArea).offset().top - navHeight
  });
});


$(document).scroll(function () {
  var scrollPositionFromTop = $('body').scrollTop();
  for (var area in contentAreas) {
    if (scrollPositionFromTop > contentAreas[area] - (navHeight+1)) {
      $('[data-navigation-item=' + area + ']').addClass('selected').siblings().removeClass('selected');
    }
  }
});

$('.hero_nav li a').click(function () {
  var contentArea = $(this).data('navigation-item');
  $('body').animate({
    scrollTop: $('.content-' + contentArea).offset().top - navHeight
  });
});

$('.scroll-to-top').click(function () {
  $('body').animate({
    scrollTop: 0
  });
});

*/
/*fade in on scroll
------------------------------*/
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });



/*return to top*/
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

/*nav bar fade in
--------------------------------------------*/
