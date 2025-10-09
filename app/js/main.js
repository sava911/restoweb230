$(function () {

  $('.popup').each(function (i) {
    let trigger = $(this).attr('data-popup-id');
    let modal = $('#' + trigger);

    $(modal).appendTo('.site-popups');

    $(this).click(function () {
      $(modal).show();
    });

    $(modal)
      .find('.close-popup')
      .click(function (e) {
        $(modal).hide();
      });

    $(modal)
      .find('.popup-overlay')
      .click(function () {
        if (event.target !== this) return;
        $(modal).hide();
      });

    $(document).keydown(function (e) {
      if (e.key === 'Escape') {
        $(modal).hide();
      }
    });
  });
  // Бургер-меню
  $('.burger-menu').click(function () {
    $(this).toggleClass('active');
    $('.header__nav').toggleClass('active');
  });

  // Закрытие меню при клике на ссылку
  $('.menu a').click(function () {
    $('.burger-menu').removeClass('active');
    $('.header__nav').removeClass('active');
  });

  // faq
  $(document).ready(function () {
    // Load previously opened FAQ from localStorage
    const openId = localStorage.getItem("openFaqId");
    if (openId) {
      const $item = $(`.faq-item[data-id="${openId}"]`);
      $item.addClass("active");
      $item.find(".faq-answer").slideDown();
    }

    $(".faq-question").on("click", function () {
      const $item = $(this).closest(".faq-item");

      // Collapse all others
      $(".faq-item").not($item).removeClass("active").find(".faq-answer").slideUp();

      // Toggle this one
      $item.toggleClass("active");
      $item.find(".faq-answer").slideToggle();

      // Save to localStorage if open
      if ($item.hasClass("active")) {
        localStorage.setItem("openFaqId", $item.data("id"));

        // Scroll smoothly to opened FAQ
        $('html, body').animate({
          scrollTop: $item.offset().top - 20
        }, 500);
      } else {
        localStorage.removeItem("openFaqId");
      }
    });
  });



})
