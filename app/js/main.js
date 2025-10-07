$(function () {
  $('.trigger-popup').each(function (i) {
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


})