$(document).ready(function() {
      $('.slider-for').slick({
  autoplay: true,
  autoplaySpeed: 4000,
    slidesToShow: 1,
  slidesToScroll: 1,
  arrows:true,
  fade: true,
  asNavFor: '.slider-nav'
});

    $('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  asNavFor: '.slider-for',
  dots: true
});


});
 