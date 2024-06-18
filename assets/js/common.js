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


        //sidebar----------------->
        // var sidebarItems = $('.sidebar-item');
        // var sections = $('.content-part');

        // function changeActiveItem() {
        //     var index = sections.length;

        //     while (--index && $(window).scrollTop() + 250 < $(sections[index]).offset().top) { }

        //     sidebarItems.removeClass('active');
        //     $(sidebarItems[index]).addClass('active');
        // }

        // changeActiveItem();
        // $(window).on('scroll', changeActiveItem);

        // sidebarItems.on('click', function (e) {
        //     e.preventDefault();
        //     $('html, body').animate({
        //         scrollTop: ($('#' + $(this).attr('data-target')).offset().top) - 200
        //     }, 400);
        // });
        //<----------------sidebar
    });
})(jQuery);