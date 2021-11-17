$(document).ready(function () {
   // бургер
   $('.burger-icon').on('click', function () {
      $('.burger').addClass('open');
      $('.burger').find('.burger__bg').fadeIn();
   });
   $('.burger__close, .burger__bg').on('click', function () {
      $('.burger').removeClass('open');
      $('.burger').find('.burger__bg').fadeOut();
   });
   $(document).on('mouseup', function (e) {
      if (!$(e.target).closest(".js-select").length) {
         var blockBurger = $(this).closest('.header__content').find('.burger')

         $('.js-select').removeClass('open');
         blockBurger.removeClass('open');
         blockBurger.find('.burger__bg').fadeOut();
      }
      e.stopPropagation();
   });
   // dropdowns
   $('.js-select-head').on('click', function () {
      var btn = $(this);
      var block = btn.closest(".js-select");
      if (!block.hasClass('open')) {
         $('.js-select').removeClass('open');
      } else {
      }
      block.toggleClass('open').find('.js-select-body');
   });
   $('.js-select-item').on('click', function () {
      $(this).closest(".js-select").removeClass('open');
      // $('.js-select').removeClass('open'); 
   });
});