$(document).ready(function() {
      $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:true,
  fade: true,
  asNavFor: '.slider-nav'
        
});
$('.slider-nav').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});
});
 