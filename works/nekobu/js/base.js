$(function () {
  var transitionend;
  var animationend;

  var agent = navigator.userAgent;
  if (agent.search(/AppleWebKit/) !== -1) {
    transitionend = "webkitTransitionEnd";
    animationend = "webkitAnimationEnd";
  } else if (agent.search(/Firefox/) !== -1) {
    transitionend = "transitionend";
    animationend = "animationend";
  } else if (agent.search(/Opera/) !== -1) {
    transitionend = "otransitionend";
    animationend = "oanimationend";
  } else if (agent.search(/MSIE/) !== -1) {
    /*transitionend = "MSTransitionEnd";
    animationend = "MSAnimationEnd";*/
    transitionend = "transitionend";
    animationend = "animationend";
  } else {
    transitionend = "transitionend";
    animationend = "animationend";
  }
});

$(function () {
  $(window).on('load', function () {
    $(".loading").delay(1500).fadeOut('slow'),
    $(".container").css("display", "block");
    $('.effect-onLoad').delay(1800).queue(function () {
      $(this).addClass("is-animated").dequeue();
    });
  });
});

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

$(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll < 450) {
      $('#dragon').css({
        transform: 'scale(' + (100 + scroll / 10) / 100 + ')',
        top: -(scroll / 50) + "%",
      });
    }
  });
});

// デザイン特集 スライダー
$(function () {
  $(".card_slider").slick({
    autoplay: true,
    autoplaySpeed: 0,
    speed: 10000,
    cssEase: "linear",
    swipe: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    arrows: false,
    variableWidth: true,
    useTransform:false,
  });
});

// ねこスライダー
// PC
$(function () {
  $(".is-pc .footer_camig").slick({
    autoplay: true,
    autoplaySpeed: 0,
    speed: 15000,
    cssEase: "linear",
    swipe: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    arrows: false,
    variableWidth: true,
    useTransform:false,
  });
  // SP
  $(".is-sp .footer_camig-list").slick({
    autoplay: true,
    autoplaySpeed: 0,
    speed: 10000,
    cssEase: "linear",
    swipe: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    arrows: false,
    variableWidth: true,
    useTransform:false,
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


// ドロワーメニュー
$(function () {
  $("#menu_open").click(function () {
    $(this).addClass('action');
    $("#menu_link").addClass('link_action');
  });
  $("#menu_link a, #menu_link #menu_close").click(function () {
    $("#menu_open").removeClass('action');
    $("#menu_link").removeClass('link_action');
  });

$(function () {
  $('.gnavi').hover(
    function () {
      $(this).children('.menu_open').addClass('action');
      $(this).children('.menu_link').addClass('link_action');
    }, function () {
      $(this).children('.menu_open').removeClass('action');
      $(this).children('.menu_link').removeClass('link_action');
    }
  );
});
});