const swiper = new Swiper(".swiper", {
  loop: true,
  speed: 1500,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var hamburger = $('.hamburger-menu');

$('.hamburger-button').on('click', function () {
    // メニューのトグル
    hamburger.toggleClass('hamburger-menu-active');

    // アイコンの切り替え
    var icon = $(this).find('i');
    if (icon.hasClass('fa-bars')) {
        icon.removeClass('fa-bars').addClass('fa-times');
    } else {
        icon.removeClass('fa-times').addClass('fa-bars');
    }
});

$(window).on('resize', function () {
  hamburger.removeClass('hamburger-menu-active');

  // アイコンを初期状態に戻す
  $('.hamburger-button').find('i').removeClass('fa-times').addClass('fa-bars');
});

var buttonToTop = $('#button-to-top');
var position = 0;
var speed = 600;

// ページトップへ戻るボタンをクリックしたら
buttonToTop.on('click', function() {
  // console.log('click');

  // アニメーションをしながらページトップに移動
  $("html, body").animate({
    scrollTop: position
  }, speed, "swing");
  return false;

});