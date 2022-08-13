$('.slideshow').slick({
  dots: true,
  infinite: true,
  centerMode: true,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 4500,
  slidesToShow: 1,
  slidesToScroll: 1,
  lazyLoad: 'ondemand',
  draggable: true,
  swipe: true,
  swipeToSlide: true,
  pauseOnDotsHover: true,
  speed: 1500,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          arrows: false,
          mobilefirst: true,
          slidesToShow: 1
        }
      }
    ]
});

$(document).ready(function(){
  $(window).scroll(function(){
    if ($(this).scrollTop() > 20) {
      $('#scrollToTop').fadeIn();
    } else {
      $('#scrollToTop').fadeOut();
    }
  }); 
});

$('.icon-menu').on('click', '.icon-box', function() {
  $(this).addClass('active').siblings().removeClass('active');
}); 
