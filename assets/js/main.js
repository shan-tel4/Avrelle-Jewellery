$(document).ready(function () {
    // On Scroll
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 20) {
            $(".down-arrow").removeClass("show").addClass("hide");
        } else {
            $(".down-arrow").addClass("show");
        }
    });

    // Smooth scroll to anchor (via the down arrow)
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = $(this.getAttribute('href'));
        if (target.length) {
            target[0].scrollIntoView({
                behavior: 'smooth'
            });
        }
    });

    // SwiperJS
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        // direction: 'vertical',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        effect: 'fade',
        fadeEffect: {
            crossFade: true // enables smooth crossfade
        },
        speed: 800, // fade duration in ms
        loop: true, // optional, for infinite scrolling
        autoplay: {
            delay: 3000, // optional, for auto-sliding
            disableOnInteraction: false
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
    });
});