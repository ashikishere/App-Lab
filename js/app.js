// Magnific Popup Banner video
$(document).ready(function () {
  $('.banner-click').magnificPopup({
    type: 'iframe',
  });
});

// OWL Crousel || Trusted Slider

$(document).ready(function () {
  var owl = $('#trusted-slider');
  owl.owlCarousel({
    margin: 30,
    nav: false,
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    smartSpeed: 2000,
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});

// OWL Crousel || Testimonial

$(document).ready(function () {
  var owl = $('#testimonial-slider');
  owl.owlCarousel({
    margin: 30,
    nav: true,
    navText: [
      "<i class='far fa-long-arrow-left'></i>",
      "<i class='far fa-long-arrow-right'></i>",
    ],
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 7000,
    autoplayHoverPause: true,
    smartSpeed: 2000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});

// hambergur

$('.hamburger-menu').on('click', function () {
  $('.hamburger-menu .line-top').toggleClass('current');
  $('.hamburger-menu .line-center').toggleClass('current');
  $('.hamburger-menu .line-bottom').toggleClass('current');
  $('.menu').toggleClass('open');
});

// sticky header
function sticky_header() {
  var wind = $(window);
  var sticky = $('.main-nav');
  wind.on('scroll', function () {
    var scroll = wind.scrollTop();
    if (scroll < 30) {
      sticky.removeClass('sticky');
    } else {
      sticky.addClass('sticky');
    }
  });
}
//  bootstap Scrollspy
sticky_header();

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#nav-sroling',
});

// WoW js

new WOW().init();
