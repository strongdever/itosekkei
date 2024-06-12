!(function ($) {
    "use strict";
    $(document).ready(function () {
        $('.main-slider').slick({
            dots: true,
            infinite: true,
            speed: 800,
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            adaptiveHeight: true
        });

        if ($(window).scrollTop() > 768) {
            $('.btn-top').fadeIn();
        } else {
            $('.btn-top').fadeOut();
        }

        $(window).scroll(function () {
            if ($(this).scrollTop() > 768) {
                $('.btn-top').fadeIn();
            } else {
                $('.btn-top').fadeOut();
            }
        });

        // Scroll to the top when the button is clicked
        $('.btn-top').click(function () {
            $('html, body').animate({ scrollTop: 0 }, 'slow');
            return false;
        });
    });
})(jQuery);