// スクロールエフェクト
$(function () {
  $(window).scroll(function () {
    const wHeight = $(window).height();
    const scrollAmount = $(window).scrollTop();
    $('.effect').each(function () {
      const targetPosition = $(this).offset().top;
      if (scrollAmount > targetPosition - wHeight + 60) {
        $(this).addClass("is-animated");
      }
    });
  });
});

  //ページ内スムーススクロール
$(function () {
  $('a[href^="#"]').click(function () {
    var speed = 800;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - 0;
    $('body,html').animate({ scrollTop: position }, speed, 'swing');
    return false;
  });

  // TOPに戻るボタン
  $(".js-btn_top").hide();
  $(".js-btn_top a").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 300, "swing");
    return false;
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".js-btn_top").fadeIn();
    } else {
      $(".js-btn_top").fadeOut();
    }
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".top_scroll").css("display", "none");
    }
  });
});

  //メニュー開閉
$(function () {
$("#gnav__floating").click(function () {
  $(".js-gnav").toggleClass('active');
});

});