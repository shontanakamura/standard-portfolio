const mySwiper = new Swiper('.swiper-container', {

  loop: true,
  slidesPerView: 1.2,
  spaceBetween: 0,

  autoplay: {
    delay: 2000
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

})

$(function(){
	$("#mv").mb_YTPlayer();
});

$(function(){
  $(".inview").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-show");
    }
  });
});

