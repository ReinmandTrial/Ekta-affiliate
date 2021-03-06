$(document).ready(function () {
   // бургер
   $('.burger-icon').on('click', function () {
      $('.burger').addClass('open');
      $('.burger').find('.burger__bg').fadeIn();
   });
   $('.burger__close, .burger__bg, .menu__link').on('click', function () {
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
      }
      block.toggleClass('open').find('.js-select-body');

   });
   $('.js-select-slow-head-icon').on('click', function () {
      var btn = $(this);
      var block = btn.closest('.js-select-slow');
      if (block.hasClass('open')) {
         block.removeClass('open').find('.js-select-slow-body').slideUp();
      } else {
         $('.js-select-slow').not(block).removeClass('open').find('.js-select-slow-body').slideUp();
         block.find('.js-select-slow-body').slideDown();
         block.addClass('open');
      }

   });
   $('.js-select-item').on('click', function () {
      // $(this).closest(".js-select").removeClass('open');
      $('.js-select').removeClass('open');
   });
   $('.js-select--swich .js-select-body .js-select-item').on('click', function () {
      btn = $(this);
      block = btn.closest('.js-select');
      thisText = btn.text();

      // block.toggleClass('open');
      block.find('.js-select-head p').text(thisText);
      block.find('.js-select-head input').val(thisText);
   });


   // popup
   $('.btn-popup-login').on('click', function () {
      $('.popup-login').fadeIn();
   });
   $('.btn-popup-forgot-pass').on('click', function () {
      $('.popup').fadeOut();
      $('.popup-forgot-pass').fadeIn();
   });

   //нажатие вне body
   $(document).on('click', function (e) {
      if (!$(e.target).closest(".popup__content").length && !$(e.target).closest(".btn-popup").length) {
         $('.popup').fadeOut();
      }
      e.stopPropagation();
   });
   $('.popup-close').on('click', function () {
      $('.popup').fadeOut();
   })
   //нажатие вне body
   //popup end

   // карта
   var parent = $("#shuffle");
   var divs = parent.children();
   while (divs.length) {
      parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
   }

   function mapFill() {
      $('.geography__map svg path').each(function (index) {
         var myPath = $(this);
         setTimeout(function () {
            myPath.attr('fill', 'url(#linear-gradient)');
         }, index * 1.5);
      });

   };

   mapFill();

   setInterval(function () {
      $('.geography__map svg path').attr('fill', 'white');
      mapFill();
   }, 7000);

   //плавная прокрутка якоря
   const anchors = document.querySelectorAll('a[href*="#"]')

   for (let anchor of anchors) {
      anchor.addEventListener('click', function (e) {
         e.preventDefault()

         const blockID = anchor.getAttribute('href').substr(1)

         document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
         })
      })
   }

});