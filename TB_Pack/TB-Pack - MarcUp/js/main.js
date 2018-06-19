"use strict";
jQuery(function ($) {


//scroll to elements-start
    $('.header__content--button').on('click', function (e) {
        e.preventDefault();
        $('html,body').stop().animate({ scrollTop: $('.repair-price').offset().top }, 800);
    });

    $('.price-interest__button').on('click', function (e) {
        e.preventDefault();
        $('html,body').stop().animate({ scrollTop: $('.contact-form').offset().top }, 800);
    });
//scroll to elements-end


// SWIPER-SLIDER
    var swiper = new Swiper('.swiper-container', {
        //slidesPerView: 1,
        effect: 'fade',
        spaceBetween: 0,
        loop: true,

        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

// SWIPER-SLIDER-END
});