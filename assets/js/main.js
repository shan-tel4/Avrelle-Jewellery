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
});